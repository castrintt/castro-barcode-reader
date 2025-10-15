# @castrintt/castro-barcode-reader

[![npm version](https://badge.fury.io/js/%40castrintt%2Fcastro-barcode-reader.svg)](https://www.npmjs.com/package/@castrintt/castro-barcode-reader)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React Native library for Honeywell barcode scanners with enhanced notification control.

Fork of [react-native-honeywell-barcode-reader](https://github.com/duytq94/react-native-honeywell-barcode-reader) with additional features.

## ✨ Features

- ✅ Read barcodes from Honeywell integrated scanners
- ✅ **NEW:** Disable/enable scanner notifications (sound & vibration)
- ✅ **NEW:** Generic property setters for advanced configuration
- ✅ TypeScript support
- ✅ Compatible with modern React Native versions

## 📱 Supported Devices

- Honeywell EDA60K
- Honeywell EDA61K
- Honeywell CT50/CT60
- Other Honeywell devices with integrated scanners

## 🚀 Installation
```bash
npm install @castrintt/castro-barcode-reader
```

or
```bash
yarn add @castrintt/castro-barcode-reader
```

### Linking

#### Link automatically (React Native < 0.60):
```bash
react-native link @castrintt/castro-barcode-reader
```

#### Link manually (recommended for all versions):

1. In `android/app/build.gradle` add:
```gradle
dependencies {
    implementation project(':castro-barcode-reader')
}
```

2. In `android/settings.gradle` add:
```gradle
include ':castro-barcode-reader'
project(':castro-barcode-reader').projectDir = new File(rootProject.projectDir, '../node_modules/@castrintt/castro-barcode-reader/android')
```

3. In `android/app/src/main/java/.../MainApplication.java`:

Add this line to import the package:
```java
import com.castro.HoneywellBarcodeReader.HoneywellBarcodeReaderPackage;
```

And add this line to the `getPackages()` method:
```java
@Override
protected List getPackages() {
    return Arrays.asList(
        new MainReactPackage(),
        new HoneywellBarcodeReaderPackage() // Add this line
    );
}
```

**Note:** For React Native 0.60+, autolinking should work automatically. Manual linking is only needed if you encounter issues.


### Android Configuration

Add to `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="com.honeywell.decode.permission.DECODE"/>
```

## 📖 Usage

### Basic Example
```typescript
import HoneywellBarcodeReader from '@castrintt/castro-barcode-reader';

// Check compatibility
if (HoneywellBarcodeReader.isCompatible) {
  console.log('Device is compatible!');
}

// Start reader
const claimed = await HoneywellBarcodeReader.startReader();
if (claimed) {
  console.log('Scanner claimed successfully');
  
  // Disable notifications
  await HoneywellBarcodeReader.disableScannerNotifications();
}

// Listen for scans
HoneywellBarcodeReader.onBarcodeReadSuccess((event) => {
  console.log('Barcode:', event.data);
});

HoneywellBarcodeReader.onBarcodeReadFail(() => {
  console.log('Scan failed');
});

// Stop reader when done
await HoneywellBarcodeReader.stopReader();
HoneywellBarcodeReader.offBarcodeReadSuccess();
HoneywellBarcodeReader.offBarcodeReadFail();
```

### React Hook Example
```typescript
import { useEffect } from 'react';
import HoneywellBarcodeReader from '@castrintt/castro-barcode-reader';

function useBarcodeScanner(onScan: (data: string) => void) {
  useEffect(() => {
    if (!HoneywellBarcodeReader.isCompatible) return;

    const startScanner = async () => {
      const claimed = await HoneywellBarcodeReader.startReader();
      if (claimed) {
        await HoneywellBarcodeReader.disableScannerNotifications();
        
        HoneywellBarcodeReader.onBarcodeReadSuccess((event) => {
          onScan(event.data);
        });
      }
    };

    startScanner();

    return () => {
      HoneywellBarcodeReader.stopReader();
      HoneywellBarcodeReader.offBarcodeReadSuccess();
      HoneywellBarcodeReader.offBarcodeReadFail();
    };
  }, [onScan]);
}
```

## 🎯 API Reference

### Methods

#### `isCompatible: boolean`
Check if the device has a Honeywell scanner.

#### `startReader(): Promise<boolean>`
Start the barcode reader. Returns `true` if successfully claimed.

#### `stopReader(): Promise<void>`
Stop the barcode reader and release resources.

#### `disableScannerNotifications(): Promise<boolean>` 🆕
Disable sound and vibration notifications.

#### `enableScannerNotifications(): Promise<boolean>` 🆕
Re-enable sound and vibration notifications.

#### `setReaderProperty(propName: string, value: boolean): Promise<boolean>` 🆕
Set a boolean property on the scanner.

#### `setReaderPropertyInt(propName: string, value: number): Promise<boolean>` 🆕
Set an integer property on the scanner.

#### `setReaderPropertyString(propName: string, value: string): Promise<boolean>` 🆕
Set a string property on the scanner.

#### `onBarcodeReadSuccess(handler: (event: { data: string }) => void): void`
Register a callback for successful barcode reads.

#### `onBarcodeReadFail(handler: () => void): void`
Register a callback for failed barcode reads.

#### `offBarcodeReadSuccess(): void`
Remove the barcode read success callback.

#### `offBarcodeReadFail(): void`
Remove the barcode read fail callback.

## 🔧 Advanced Configuration
```typescript
// Custom property examples
await HoneywellBarcodeReader.setReaderProperty(
  'PROPERTY_TRIGGER_CONTROL_MODE',
  'TRIGGER_CONTROL_MODE_AUTO_CONTROL'
);

await HoneywellBarcodeReader.setReaderPropertyInt(
  'PROPERTY_DECODE_TIMEOUT',
  5000
);
```

## 📝 License

MIT

## 🙏 Credits

Based on [duytq94/react-native-honeywell-barcode-reader](https://github.com/duytq94/react-native-honeywell-barcode-reader)

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📧 Support

For issues and questions, please use the [GitHub Issues](https://github.com/castrintt/castro-barcode-reader/issues) page.
```


├── .gitignore ✅
└── .npmignore ✅ (novo)

```

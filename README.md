# @castrintt/castro-barcode-reader

Fork of react-native-honeywell-barcode-reader with additional features.

## 🆕 New Features

- ✅ `disableScannerNotifications()` method - Disables sound and vibration
- ✅ `enableScannerNotifications()` method - Re-enables notifications
- ✅ Generic `setReaderProperty` methods

## Installation

\`\`\`bash
npm install @castrintt/castro-barcode-reader
# or
yarn add @castrintt/castro-barcode-reader
\`\`\`

## Usage

\`\`\`javascript
import HoneywellBarcodeReader from '@castrintt/castro-barcode-reader';

async function startScanner() {
  const claimed = await HoneywellBarcodeReader.startReader();
  if (claimed) {
    // Disable sound notifications
    await HoneywellBarcodeReader.disableScannerNotifications();
  }
}
\`\`\`

## Credits

Based on the work of [duytq94/react-native-honeywell-barcode-reader](https://github.com/duytq94/react-native-honeywell-barcode-reader)
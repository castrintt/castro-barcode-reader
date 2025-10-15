# React Native Honeywell Barcode Reader

This package works with Honeywell devices that have an integrated barcode scanner, like the Honeywell EDA50K (tested).

Actually, I custom from https://github.com/Volst/react-native-honeywell-scanner but fix cannot remove event listener (even you close the reader). And if you don't remove, the event will fire twice, triple... more and more times when you call `addListener` until you kill the app.

The bug at here is you can not remove event listener by call `DeviceEventEmitter.removeListener(eventName, handler)` since it doesn't have this method. Follow here: https://stackoverflow.com/questions/36886628/how-do-you-remove-a-listener-from-react-natives-eventemitter-instance

## 🆕 New Features

- ✅ `disableScannerNotifications()` method - Disables sound and vibration
- ✅ `enableScannerNotifications()` method - Re-enables notifications
- ✅ Generic `setReaderProperty` methods

## Installation

```
npm i castro-barcode-reader
```

## Link automatically:

```
react-native link castro-barcode-reader
```

## Link manually (recommend):

1. In `app\build.gradle` add
```
compile project(':castro-barcode-reader')
```

2. In `settings.gradle` add

```
include ':castro-barcode-reader'
project(':castro-barcode-reader').projectDir = new File(rootProject.projectDir, '../node_modules/castro-barcode-reader/android')
```

3. In `MainApplication.java`

Add this line to import package
```
import com.duytq94.HoneywellBarcodeReader.HoneywellBarcodeReaderPackage;
```
and add this line to getPackages()
```
new HoneywellBarcodeReaderPackage()
```

## Usage

First you'll want to check whether the device is a Honeywell scanner:

```js
import HoneywellBarcodeReader from 'react-native-honeywell-barcode-reader';

HoneywellBarcodeReader.isCompatible // true or false
```

The barcode reader needs to be "claimed" by your application; meanwhile no other application can use it. You can do that like this:

```js
HoneywellBarcodeReader.startReader().then((claimed) => {
    console.log(claimed ? 'Barcode reader is claimed' : 'Barcode reader is busy');
});
```

To get events from the barcode scanner:

```js
HoneywellBarcodeReader.onBarcodeReadSuccess(event => {
    console.log('Received data', event);
});

HoneywellBarcodeReader.onBarcodeReadFail(() => {
    console.log('Barcode read failed');
});
```

To free the claim and stop the reader, also freeing up resources:

```js
HoneywellBarcodeReader.stopReader().then(() => {
    console.log('Freedom!');
});
```

To stop receiving events:

```js
HoneywellBarcodeReader.offBarcodeReadSuccess();
HoneywellBarcodeReader.offBarcodeReadFail();
```
## Credits

Based on the work of [duytq94/react-native-honeywell-barcode-reader](https://github.com/duytq94/react-native-honeywell-barcode-reader)

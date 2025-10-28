import { NativeModules, NativeEventEmitter } from "react-native";

const { HoneywellBarcodeReader } = NativeModules;

const eventEmitter = new NativeEventEmitter(HoneywellBarcodeReader);

let successListener = null;
let failListener = null;

export default {
  isCompatible: HoneywellBarcodeReader.isCompatible,

  startReader() {
    return HoneywellBarcodeReader.startReader();
  },

  stopReader() {
    return HoneywellBarcodeReader.stopReader();
  },

  releaseReader() {
    return HoneywellBarcodeReader.releaseReader();
  },

  claimReader() {
    return HoneywellBarcodeReader.claimReader();
  },

  disableScannerNotifications() {
    return HoneywellBarcodeReader.disableScannerNotifications();
  },

  enableScannerNotifications() {
    return HoneywellBarcodeReader.enableScannerNotifications();
  },

  getSupportedProperties() {
    return HoneywellBarcodeReader.getSupportedProperties();
  },

  setReaderProperty(propName, value) {
    return HoneywellBarcodeReader.setReaderProperty(propName, value);
  },

  setReaderPropertyInt(propName, value) {
    return HoneywellBarcodeReader.setReaderPropertyInt(propName, value);
  },

  setReaderPropertyString(propName, value) {
    return HoneywellBarcodeReader.setReaderPropertyString(propName, value);
  },

  onBarcodeReadSuccess(handler) {
    successListener = eventEmitter.addListener(
      HoneywellBarcodeReader.BARCODE_READ_SUCCESS,
      handler
    );
  },

  onBarcodeReadFail(handler) {
    failListener = eventEmitter.addListener(
      HoneywellBarcodeReader.BARCODE_READ_FAIL,
      handler
    );
  },

  offBarcodeReadSuccess() {
    if (successListener) {
      successListener.remove();
      successListener = null;
    }
  },

  offBarcodeReadFail() {
    if (failListener) {
      failListener.remove();
      failListener = null;
    }
  },
};

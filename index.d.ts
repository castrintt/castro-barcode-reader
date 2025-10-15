type BarcodeReadSuccessHandler = (event: { data: string }) => void;
type BarcodeReadFailHandler = () => void;

interface HoneywellBarcodeReaderModule {
  onBarcodeReadSuccess: (handler: BarcodeReadSuccessHandler) => void;
  onBarcodeReadFail: (handler: BarcodeReadFailHandler) => void;
  offBarcodeReadSuccess: () => void;
  offBarcodeReadFail: () => void;
  isCompatible: boolean;
  startReader: () => Promise<boolean>;
  stopReader: () => Promise<boolean>;
  disableScannerNotifications: () => Promise<boolean>;
  enableScannerNotifications: () => Promise<boolean>;
  setReaderProperty: (propName: string, value: boolean) => Promise<boolean>;
  setReaderPropertyInt: (propName: string, value: number) => Promise<boolean>;
  setReaderPropertyString: (propName: string, value: string) => Promise<boolean>;
}

declare const HoneywellBarcodeReader: HoneywellBarcodeReaderModule;

export {
  BarcodeReadSuccessHandler,
  BarcodeReadFailHandler,
  HoneywellBarcodeReaderModule,
};

export default HoneywellBarcodeReader;

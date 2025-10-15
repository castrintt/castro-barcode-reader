declare module '@castrintt/castro-barcode-reader' {
  export interface BarcodeReadEvent {
    data: string;
  }

  export type BarcodeReadSuccessHandler = (event: BarcodeReadEvent) => void;
  export type BarcodeReadFailHandler = () => void;

  export interface HoneywellBarcodeReaderModule {
    /**
     * Check if device is compatible with Honeywell scanner
     */
    isCompatible: boolean;

    /**
     * Start the barcode reader
     * @returns Promise<boolean> - true if claimed successfully
     */
    startReader(): Promise<boolean>;

    /**
     * Stop the barcode reader
     */
    stopReader(): Promise<void>;

    /**
     * Disable all scanner notifications (sound and vibration)
     */
    disableScannerNotifications(): Promise<boolean>;

    /**
     * Enable all scanner notifications (sound and vibration)
     */
    enableScannerNotifications(): Promise<boolean>;

    /**
     * Set a boolean property on the barcode reader
     */
    setReaderProperty(propName: string, value: boolean): Promise<boolean>;

    /**
     * Set an integer property on the barcode reader
     */
    setReaderPropertyInt(propName: string, value: number): Promise<boolean>;

    /**
     * Set a string property on the barcode reader
     */
    setReaderPropertyString(propName: string, value: string): Promise<boolean>;

    /**
     * Register callback for successful barcode reads
     */
    onBarcodeReadSuccess(handler: BarcodeReadSuccessHandler): void;

    /**
     * Register callback for failed barcode reads
     */
    onBarcodeReadFail(handler: BarcodeReadFailHandler): void;

    /**
     * Unregister barcode read success callback
     */
    offBarcodeReadSuccess(): void;

    /**
     * Unregister barcode read fail callback
     */
    offBarcodeReadFail(): void;
  }

  const HoneywellBarcodeReader: HoneywellBarcodeReaderModule;
  export default HoneywellBarcodeReader;
}
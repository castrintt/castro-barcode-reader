declare module "@castrintt/castro-barcode-reader" {
  export interface BarcodeReadEvent {
    data: string;
  }

  export type BarcodeReadSuccessHandler = (event: BarcodeReadEvent) => void;
  export type BarcodeReadFailHandler = () => void;

  // Tipo para as propriedades suportadas
  export interface SupportedProperties {
    [key: string]: string | number | boolean;
  }

  export interface HoneywellBarcodeReaderModule {
    /**
     * Check if device is compatible with Honeywell scanner
     */
    isCompatible: boolean;

    /**
     * Start the barcode reader (creates instance and claims)
     * @returns Promise<boolean> - true if claimed successfully
     */
    startReader(): Promise<boolean>;

    /**
     * Stop the barcode reader (destroys instance completely)
     * Use this only when closing the app or final cleanup
     */
    stopReader(): Promise<void>;

    /**
     * Release the barcode reader claim (keeps instance alive)
     * Use this when switching between screens
     * @returns Promise<boolean> - true if released successfully
     */
    releaseReader(): Promise<boolean>;

    /**
     * Claim the barcode reader (re-acquire control)
     * Use this when returning to a screen that needs the reader
     * @returns Promise<boolean> - true if claimed successfully
     */
    claimReader(): Promise<boolean>;

    /**
     * Disable all scanner notifications (sound and vibration)
     */
    disableScannerNotifications(): Promise<boolean>;

    /**
     * Enable all scanner notifications (sound and vibration)
     */
    enableScannerNotifications(): Promise<boolean>;

    /**
     * Get all supported properties from the scanner
     * @returns Promise with object containing all available properties and their current values
     */
    getSupportedProperties(): Promise<SupportedProperties>;

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

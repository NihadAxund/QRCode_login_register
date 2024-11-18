import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import toast from 'react-hot-toast';

interface QRScannerProps {
  onScanSuccess: (decodedText: string) => void;
  onScanError: (error: string) => void;
}

export default function QRScanner({ onScanSuccess, onScanError }: QRScannerProps) {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    scannerRef.current = new Html5QrcodeScanner(
      'qr-reader',
      { 
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      },
      false
    );

    scannerRef.current.render(
      (decodedText) => {
        toast.success('QR Code scanned successfully!');
        onScanSuccess(decodedText);
        scannerRef.current?.clear();
      },
      (error) => {
        if (error?.message) {
          onScanError(error.message);
        }
      }
    );

    return () => {
      scannerRef.current?.clear();
    };
  }, [onScanSuccess, onScanError]);

  return (
    <div>
      <div id="qr-reader" className="mx-auto max-w-sm"></div>
    </div>
  );
}
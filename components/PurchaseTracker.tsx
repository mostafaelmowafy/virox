'use client';
import { useEffect } from 'react';
import { fireEvent } from '@/app/lib/pixel';

export default function PurchaseEvent() {
  useEffect(() => {
    fireEvent('Purchase', {
      content_name: 'successfully completed purchase',
      value: 420,
      currency: 'pound',
    });
  }, []);

  return null;
}

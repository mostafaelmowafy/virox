'use client';
import { useEffect } from 'react';
import { fireEvent } from '@/app/lib/pixel';

export default function PurchaseEvent() {
  useEffect(() => {
    fireEvent('Purchase', {
      value: 420,
      currency: 'EGP',
      content_name: 'VIROX GEL',
      content_type: 'product',
      num_items: 1,
    });
  }, []);

  return null;
}

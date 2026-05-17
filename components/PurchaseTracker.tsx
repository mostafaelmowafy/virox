// components/PurchaseEvent.tsx
'use client';

import { useEffect } from 'react';

export default function PurchaseEvent() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 420,
        currency: 'EGP',
        content_name: 'VIROX GEL',
        content_type: 'product',
        num_items: 1,
      });
    }
  }, []);

  return null;
}

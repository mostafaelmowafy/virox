'use client';
import { useEffect } from 'react';

export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    if (!pixelId) return;

    // dynamic import جوه useEffect — بيتحمل بس على الـ browser
    import('react-facebook-pixel').then((module) => {
      const ReactPixel = module.default;
      ReactPixel.init(pixelId, undefined, { autoConfig: true, debug: false });
      ReactPixel.pageView();
    });
  }, []);

  return null;
}

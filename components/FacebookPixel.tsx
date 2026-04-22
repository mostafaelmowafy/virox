'use client';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    if (pixelId) {
      ReactPixel.init(pixelId, undefined, {
        autoConfig: true,
        debug: false,
      });
      ReactPixel.pageView();
    }
  }, []);

  return null;
}

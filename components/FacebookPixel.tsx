'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// ضع رقم البيكسل الخاص بك هنا مباشرة بين العلامتين
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID; // تأكد من تعيين المتغير في .env.local

const getPageEvent = (pathname: string) => {
  switch (pathname) {
    case '/':
      return 'ViewStoryPage';
    case '/productsells':
      return 'ViewProductPage';
    case '/ThankYouPage':
      return 'ViewThankYouPage';
    default:
      return 'PageView';
  }
};

export const FacebookPixel = () => {
  const pathname = usePathname();

  useEffect(() => {
    // ✅ PageView اتبعت من الـ Script، احنا بس نبعت الـ Custom
    if (window.fbq) {
      window.fbq('trackCustom', getPageEvent(pathname));
    }
  }, [pathname]);

  // حذفنا شرط الـ null لأن الرقم أصبح موجوداً دائماً
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
};

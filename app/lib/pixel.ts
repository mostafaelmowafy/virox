// lib/pixel.ts
export const fireEvent = (
  eventName: string,
  params?: Record<string, unknown>,
  isCustom = false,
) => {
  const attempt = (tries: number) => {
    if (typeof window !== 'undefined' && window.fbq) {
      isCustom
        ? window.fbq('trackCustom', eventName, params)
        : window.fbq('track', eventName, params);
    } else if (tries > 0) {
      setTimeout(() => attempt(tries - 1), 300); // جرب كل 300ms
    }
  };
  attempt(10); // أقصى 10 محاولات = 3 ثواني
};

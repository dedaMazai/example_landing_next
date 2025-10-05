/**
 * Получает базовый URL сайта в зависимости от окружения
 * @returns {string} Базовый URL сайта
 */
export function getBaseUrl(): string {
  // Приоритет переменных окружения:
  // 1. NEXT_PUBLIC_SITE_URL - явно указанный URL
  // 2. VERCEL_URL - автоматический URL от Vercel
  // 3. Fallback на production URL
  // 4. Development localhost
  
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  if (process.env.NODE_ENV === 'production') {
    return 'https://pdp-landing.netlify.app';
  }
  
  return 'http://localhost:3000';
}

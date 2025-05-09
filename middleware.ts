// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // Список поддерживаемых локалей
// const locales = ['en', 'ru']

// // Получаем локаль из URL
// function getLocale(request: NextRequest) {
//   const pathname = request.nextUrl.pathname
//   const pathnameLocale = pathname.split('/')[1]
  
//   if (locales.includes(pathnameLocale)) {
//     return pathnameLocale
//   }
  
//   return 'en' // дефолтная локаль
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname
  
//   // Проверяем, есть ли локаль в пути
//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )
 
//   // Редирект если локаль отсутствует
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request)
 
//     return NextResponse.redirect(
//       new URL(`/${locale}${pathname}`, request.url)
//     )
//   }
// }

// export const config = {
//   matcher: [
//     // Пропускаем все внутренние пути Next.js
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// } 

import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import {routing} from '../i18n/routing';

// function getLocale(request: NextRequest) {
//   const pathname = request.nextUrl.pathname
//   const pathnameLocale = pathname.split('/')[1]

//   if (routing.locales.includes(pathnameLocale as any)) {
//     return pathnameLocale
//   }

//   return routing.defaultLocale
// }

// export default function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname

//   // Проверяем, есть ли локаль в пути
//   const pathnameIsMissingLocale = routing.locales.every(
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
//   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// };
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
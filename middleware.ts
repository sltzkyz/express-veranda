import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// SENİN AYARLARIN BURAYA ENTEGRE EDİLDİ
const locales = ['en', 'de', 'fr', 'tr'] 
const defaultLocale = 'en'
const cookieName = 'i18next'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next()
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // SENİN ÇEREZ İSMİNLE KONTROL EDİYORUZ
    const cookieLocale = request.cookies.get(cookieName)?.value
    
    let locale = defaultLocale

    if (cookieLocale && locales.includes(cookieLocale)) {
        locale = cookieLocale
    }

    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
    ],
}
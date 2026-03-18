import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages([...languages])

export const config = {
    matcher: '/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|otf|ttf|woff|woff2)$).*)',
}

export default function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    // 1. KONTROL: URL'de zaten bir dil kodu var mı? (örn: /en/about)
    const pathnameHasLocale = languages.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) {
        const locale = languages.find(
            (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
        )

        const response = NextResponse.next()

        if (locale) {
            response.cookies.set(cookieName, locale)
        }

        return response
    }

    let lng
    if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng

    return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url))
}
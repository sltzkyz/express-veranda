export const fallbackLng = 'en'
export const languages = [fallbackLng, 'de', 'fr', 'tr' ]
export type Language = (typeof languages)[number]
export const defaultNS = 'translation'
export const cookieName = 'i18next'
export const headerName = 'x-i18next-current-language'
export function getOptions(lng: string = fallbackLng, ns: string | string[] = defaultNS) {
    return {
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    }
}
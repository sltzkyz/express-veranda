import { createInstance, FlatNamespace, KeyPrefix } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions, Language, defaultNS } from './settings'
import { FallbackNs } from 'react-i18next'

const initI18next = async (lng: Language, ns: string | string[]) => {
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => import(`../../locales/${language}/${namespace}.json`)))
        .init(getOptions(lng, ns))
    return i18nInstance
}

export async function useTranslation<
    Ns extends FlatNamespace | undefined = undefined,
    KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
    lng: Language,
    ns?: Ns,
    options: { keyPrefix?: KPrefix } = {}
) {
    const i18nextInstance = await initI18next(lng, ns || defaultNS) // defaultNS fallback
    return {
        t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
        i18n: i18nextInstance
    }
}
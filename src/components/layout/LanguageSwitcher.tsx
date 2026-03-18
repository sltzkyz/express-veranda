"use client"

import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { languages } from "@/app/i18n/settings"
import * as config from '@/lib/config'

const NoiseOverlay = () => (
    <div 
        className="absolute inset-0 z-25 opacity-20 pointer-events-none mix-blend-overlay bg-repeat"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "120px"
        }}
    />
);

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const redirectedPathName = (locale: string) => {
        if (!pathname) return "/"
        const segments = pathname.split("/")
        segments[1] = locale
        return segments.join("/")
    }

    // DİL SEÇİLDİĞİNDE ÇALIŞACAK FONKSİYON
    const handleLocaleChange = (locale: string) => {
        // Çerezi (Cookie) ayarla - Next.js i18next middleware'i genellikle 'NEXT_LOCALE' veya 'i18next' ismini bekler
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
        setIsOpen(false);
    }

    const activeLng = languages.find((lng) => pathname?.startsWith(`/${lng}`)) || languages[0]
    const activeLngName = config.languages.find((l) => l.code === activeLng)?.name || activeLng.toUpperCase()

    return (
        <div ref={menuRef} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-25 font-sans">
            <div 
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 bg-[#49494E] border border-[#B08D57]/50 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom ${
                    isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
            >
                <NoiseOverlay />
                <div className="absolute inset-0 z-25 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="relative z-25 w-full flex flex-col">
                    {languages.map((lng) => {
                        const isActive = lng === activeLng
                        const lngName = config.languages.find((l) => l.code === lng)?.name || lng.toUpperCase()
                        
                        return (
                            <Link
                                key={lng}
                                href={redirectedPathName(lng)}
                                // TIKLANDIĞINDA ÇEREZİ KAYDET
                                onClick={() => handleLocaleChange(lng)}
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors ${
                                    isActive 
                                        ? "bg-[#B08D57]/20 text-white border-l-4 border-[#B08D57]" 
                                        : "bg-transparent text-gray-300 hover:bg-[#B08D57]/10 hover:text-white border-l-4 border-transparent"
                                }`}
                            >
                                <span>{lngName}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group flex items-center gap-2 bg-[#49494E] text-white px-5 py-3 rounded-full shadow-xl border border-[#B08D57]/50 hover:border-[#B08D57] transition-all duration-300 cursor-pointer overflow-hidden"
            >
                <NoiseOverlay />
                <div className="absolute inset-0 z-25 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-50"></div>

                <span className="relative z-25 text-sm font-bold tracking-wide group-hover:text-[#B08D57] transition-colors duration-300">
                    {activeLngName}
                </span>
                
                <svg 
                    className={`relative z-25 w-4 h-4 text-[#B08D57] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    )
}
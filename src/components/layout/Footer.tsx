import { footer } from '@/lib/config';
import Link from 'next/link';
import { FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/app/i18n';

export default async function Footer({ lng }: { lng: string }) {
    const currentYear = new Date().getFullYear();
    const footerData = footer;
    
    // Dil dosyasından çevirileri çekiyoruz
    const { t } = await useTranslation(lng);

    // Harita Koordinatları (Sabit)
    const mapLocation = "40.737361,29.964056";

    // Telefon numarasını temizleyip salt rakam yapıyoruz
    const cleanPhone = t('contact.phoneNumber').replace(/\D/g, '');

    // WhatsApp Hazır Mesajları (Dillere göre ve [WEB] ibareli)
    const waMessages: { [key: string]: string } = {
        en: "Hello, I would like to get information about your winter garden systems. [WEB]",
        de: "Hallo, ich hätte gerne Informationen zu Ihren Wintergartensystemen. [WEB]",
        fr: "Bonjour, je souhaite obtenir des informations sur vos systèmes de jardin d'hiver. [WEB]",
        tr: "Merhaba, ürünleriniz hakkında bilgi almak istiyorum. [WEB]"
    };

    // Aktif dile göre mesajı seç, dili bulamazsa varsayılan olarak İngilizceyi al ve URL formatına çevir
    const waText = encodeURIComponent(waMessages[lng] || waMessages['en']);

    const NoiseOverlay = () => (
        <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay bg-repeat"
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: "120px"
            }}
        />
    );

    return (
        <footer className="border-t-2 border-[#B08D57] pt-16 pb-20 mt-auto bg-[#49494E] relative overflow-hidden">
            <NoiseOverlay /> 

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

                    {/* 1. Kolon: Logo ve Linkler */}
                    <div className="flex flex-col space-y-6">
                        <div className="text-4xl tracking-tight">
                            <span className="font-bold text-[#B08D57]">Express</span>
                            <span className="font-bold text-white">Veranda</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-zinc-100">
                            {(footerData.links as any)[lng].map((item: any) => (
                                <Link key={item.link} href={item.link} className="hover:text-[#B08D57] transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <p className="text-sm text-zinc-300 font-medium opacity-70">
                            {(footerData.copyright as any)[lng]}
                        </p>
                    </div>

                    {/* 2. Kolon: İletişim Bilgileri */}
                    <div className="flex flex-col gap-8">
                        
                        {/* 1. Adres Satırı */}
                        <a 
                            href={`https://www.google.com/maps/d/u/0/embed?mid=1F4gaDe-ErRwdDwtaJkNpoDPHAoaHNGo&ehbc=2E312F&noprof=1&ll=40.74745084661109%2C29.95861975924682&z=175{mapLocation}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cursor-pointer group flex items-center gap-4 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden w-11 h-11 bg-[#5A5A60] rounded-xl flex items-center justify-center text-[#B08D57] group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-500 border border-[#B08D57]/30 shadow-md">
                                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <svg className="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">{t('contact.address')}</span>
                                <span className="font-bold text-white group-hover:text-[#B08D57] transition-colors duration-300">{t('contact.addressDetail')}</span>
                            </div>
                        </a>

                        {/* 2. Telefon/WhatsApp Satırı */}
                        <a 
                            href={lng === 'tr' 
                                ? `tel:+${cleanPhone}` 
                                : `https://wa.me/${cleanPhone}?text=${waText}`
                            }
                            target={lng === 'tr' ? '_self' : '_blank'} 
                            rel={lng === 'tr' ? '' : 'noopener noreferrer'}
                            className="cursor-pointer group flex items-center gap-4 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden w-11 h-11 bg-[#5A5A60] rounded-xl flex items-center justify-center text-[#B08D57] group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-500 border border-[#B08D57]/30 shadow-md">
                                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                {lng === 'tr' ? (
                                    <svg className="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                ) : (
                                    <FaWhatsapp className="relative z-10 w-5 h-5" />
                                )}
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">{lng === 'tr' ? t('contact.phone') : 'WhatsApp'}</span>
                                <span className="font-bold text-white group-hover:text-[#B08D57] transition-colors duration-300">{t('contact.phoneNumber')}</span>
                            </div>
                        </a>

                        {/* 3. E-Posta Satırı */}
                        <a 
                            href={`mailto:${t('contact.emailAddress')}`}
                            className="cursor-pointer group flex items-center gap-4 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden w-11 h-11 bg-[#5A5A60] rounded-xl flex items-center justify-center text-[#B08D57] group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-500 border border-[#B08D57]/30 shadow-md">
                                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <svg className="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">{t('contact.email')}</span>
                                <span className="font-bold text-white group-hover:text-[#B08D57] transition-colors duration-300">{t('contact.emailAddress')}</span>
                            </div>
                        </a>
                    </div>

                    {/* 3. Kolon: Şirket Hakkında */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-lg text-white mb-3">
                            {(footerData.about as any)[lng].title}
                        </h4>
                        <p className="text-sm text-zinc-300 leading-relaxed opacity-80">
                            {(footerData.about as any)[lng].description}
                        </p>
                    </div>

                </div>

                {/* Alt Kısım: Dil Değiştirici */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-500/30'>
                    <LanguageSwitcher />
                    <p className="text-xs text-zinc-400 font-medium italic opacity-60">
                        {(footerData.about as any)[lng].lastDescription}
                    </p>
                </div>
            </div>
        </footer>
    );
}
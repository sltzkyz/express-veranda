import { useTranslation } from '@/app/i18n';

export default async function ContactPage({ params }: { params: { lng: string } }) {

    const { lng } = await params as any;
    const { t } = await useTranslation(lng)

    // Verdiğin koordinatların ondalık formatı: 40.737361, 29.964056
    const mapLocation = "40.737361,29.964056";
    const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7314227092927!2d29.964056!3d40.737361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzE0LjUiTiAyOcKwNTcnNTAuNiJF!5e0!3m2!1str!2str!4v1716301234567!5m2!1str!2str`;

    return (
        <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col pt-32">
            <main className="flex-grow py-12">

                {/* Sayfa Başlığı */}
                <div className="flex items-center justify-center space-x-4 mb-16 px-4">
                    <div className="h-1 w-12 sm:w-24 bg-[#B08D57] opacity-50"></div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#49494E] text-center uppercase">
                        {t('contact.title')}
                    </h1>
                    <div className="h-1 w-12 sm:w-24 bg-[#B08D57] opacity-50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Sol Taraf: İletişim Bilgileri */}
                        <div className="space-y-8">
                            <div>
                                <p className="text-[#B08D57] text-sm font-bold tracking-widest uppercase mb-2">{t('contact.subtitle')}</p>
                                <h2 className="text-3xl font-bold text-[#49494E] mb-4">{t('contact.title')}</h2>
                                <p className="text-[#49494E] leading-relaxed text-sm">
                                    {t('contact.description')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* KONUM KUTUSU - Tıklanınca Navigasyon Uygulamasını Açar */}
                                <a 
                                    href={`https://maps.google.com/?q=${mapLocation}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="relative group hover:shadow-2xl shadow-black/10 bg-[#49494E] border-2 border-[#B08D57]/60 w-full h-auto rounded-xl p-4 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 cursor-pointer"
                                >
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
                                    <div 
                                        className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-repeat"
                                        style={{ 
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                            backgroundSize: "120px"
                                        }}
                                    ></div>
                                    <div className="relative z-10 w-12 h-12 bg-[#B08D57]/20 rounded-lg flex items-center justify-center text-[#B08D57] flex-shrink-0 group-hover:bg-[#B08D57] group-hover:text-white transition-colors duration-300 border border-[#B08D57]/50 shadow-md">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-xs text-gray-300 uppercase tracking-wider">{t('contact.address')}</p>
                                        <p className="font-bold text-[#B08D57]">{t('contact.addressDetail')}</p>
                                    </div>
                                </a>

                                {/* TELEFON KUTUSU */}
                                <a 
                                    href={`tel:${t('contact.phoneNumber').replace(/\s+/g, '')}`}
                                    className="relative group hover:shadow-2xl shadow-black/10 bg-[#49494E] border-2 border-[#B08D57]/60 w-full h-auto rounded-xl p-4 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 cursor-pointer"
                                >
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
                                    <div className="relative z-10 w-12 h-12 bg-[#B08D57]/20 rounded-lg flex items-center justify-center text-[#B08D57] flex-shrink-0 group-hover:bg-[#B08D57] group-hover:text-white transition-colors duration-300 border border-[#B08D57]/50 shadow-md">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6V5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-xs text-gray-300 uppercase tracking-wider">{t('contact.phone')}</p>
                                        <p className="font-bold text-[#B08D57]">{t('contact.phoneNumber')}</p>
                                    </div>
                                </a>

                                {/* E-POSTA KUTUSU */}
                                <a 
                                    href={`mailto:${t('contact.emailAddress')}`}
                                    className="relative group hover:shadow-2xl shadow-black/10 bg-[#49494E] border-2 border-[#B08D57]/60 w-full h-auto rounded-xl p-4 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 cursor-pointer"
                                >
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
                                    <div className="relative z-10 w-12 h-12 bg-[#B08D57]/20 rounded-lg flex items-center justify-center text-[#B08D57] flex-shrink-0 group-hover:bg-[#B08D57] group-hover:text-white transition-colors duration-300 border border-[#B08D57]/50 shadow-md">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-xs text-gray-300 uppercase tracking-wider">{t('contact.email')}</p>
                                        <p className="font-bold text-[#B08D57]">{t('contact.emailAddress')}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sağ Taraf: Canlı Harita Görünümü */}
                        <div className="w-full min-h-[450px] lg:h-full bg-[#49494E] border-2 border-[#B08D57]/60 rounded-xl overflow-hidden relative shadow-lg group">
                            <iframe 
                                src={mapEmbedUrl}
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
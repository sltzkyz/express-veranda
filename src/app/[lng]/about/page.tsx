import CountUp from '@/components/CountUp';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n';

export default async function AboutPage({ params }: { params: { lng: string } }) {

    const { lng } = await params as any;
    const { t } = await useTranslation(lng);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col pt-32">
            {/* Main Content */}
            <main className="py-12">

                {/* Sayfa Başlığı */}
                <div className="flex items-center justify-center space-x-4 mb-16 px-4">
                    <div className="h-1 w-12 sm:w-24 bg-[#B08D57] opacity-50"></div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#49494E] text-center uppercase">
                        {t('about.title')}
                    </h1>
                    <div className="h-1 w-12 sm:w-24 bg-[#B08D57] opacity-50"></div>
                </div>

                {/* Biz Kimiz / Hikayemiz Bölümü */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/1 space-y-6">
                            <p className="text-[#B08D57] text-sm font-bold tracking-widest uppercase">{t('about.history')}</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#49494E]">
                                {t('about.historyTitle')}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {t('about.historyDescription')}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {t('about.historyDescription2')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* VİZYON VE MİSYON BÖLÜMÜ (PREMİUM KARTLAR) */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* VİZYON KARTI */}
                        <div className="cursor-pointer relative group hover:shadow-2xl shadow-black/10 bg-[#49494E] border-2 border-[#B08D57]/60 w-full h-auto rounded-xl p-10 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex flex-col gap-6">
                            
                            {/* 1. Katman: Radial Işık */}
                            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
                            
                            {/* 2. Katman: SAF SVG NOISE DOKUSU (Kesilme yapmaz) */}
                            <div 
                                className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-repeat"
                                style={{ 
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    backgroundSize: "120px"
                                }}
                            ></div>

                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="w-16 h-16 bg-[#B08D57]/20 text-[#B08D57] flex items-center justify-center rounded-xl group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-500 border border-[#B08D57]/50 shadow-md [&>svg]:w-8 [&>svg]:h-8">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#B08D57]">{t('about.vision')}</h3>
                                <div className="w-12 h-1 bg-[#B08D57]/50 rounded-full group-hover:w-24 group-hover:bg-[#B08D57] transition-all duration-300"></div>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {t('about.visionDescription')}
                                </p>
                            </div>
                        </div>

                        {/* MİSYON KARTI */}
                        <div className="cursor-pointer relative group hover:shadow-2xl shadow-black/10 bg-[#49494E] border-2 border-[#B08D57]/60 w-full h-auto rounded-xl p-10 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex flex-col gap-6">
                            
                            {/* 1. Katman: Radial Işık */}
                            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
                            
                            {/* 2. Katman: SAF SVG NOISE DOKUSU */}
                            <div 
                                className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-repeat"
                                style={{ 
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    backgroundSize: "120px"
                                }}
                            ></div>

                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="w-16 h-16 bg-[#B08D57]/20 text-[#B08D57] flex items-center justify-center rounded-xl group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-500 border border-[#B08D57]/50 shadow-md [&>svg]:w-8 [&>svg]:h-8">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#B08D57]">{t('about.mission')}</h3>
                                <div className="w-12 h-1 bg-[#B08D57]/50 rounded-full group-hover:w-24 group-hover:bg-[#B08D57] transition-all duration-300"></div>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {t('about.missionDescription')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* İstatistik Şeridi */}
                <div className="text-[#49494E] py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
                            <div className="py-4 md:py-0">
                                <p className="text-4xl font-extrabold text-[#B08D57] mb-2 flex justify-center items-center">
                                    <CountUp
                                        from={0}
                                        to={19}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    <span className="text-xl font-bold ml-1">+</span>
                                </p>
                                <p className="text-sm tracking-wider uppercase text-[#49494E] font-semibold">
                                    {t('about.yearsOfExperience')}
                                </p>
                            </div>
                            <div className="py-4 md:py-0">
                                <p className="text-4xl font-extrabold text-[#B08D57] mb-2 flex justify-center items-center">
                                    <CountUp
                                        from={0}
                                        to={4000}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    <span className="text-xl font-bold ml-1">+</span>
                                </p>
                                <p className="text-sm tracking-wider uppercase text-[#49494E] font-semibold">
                                    {t('about.completedProjects')}
                                </p>
                            </div>
                            <div className="py-4 md:py-0">
                                <p className="text-4xl font-extrabold text-[#B08D57] mb-2 flex justify-center items-center">
                                    <span className="text-xl font-bold mr-1">%</span>
                                    <CountUp
                                        from={0}
                                        to={100} 
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                </p>
                                <p className="text-sm tracking-wider uppercase text-[#49494E] font-semibold">
                                    {t('about.customerSatisfaction')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
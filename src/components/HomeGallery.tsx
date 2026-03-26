"use client";
import React, { useState } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { productImages } from "@/lib/config"; 
import { FaLocationDot } from "react-icons/fa6";

const NoiseOverlay = () => (
    <div 
        className="absolute inset-0 z-[25] opacity-20 pointer-events-none mix-blend-overlay bg-repeat"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "120px"
        }}
    />
);

const allImages = [
    ...productImages.pergola.branda,
    ...productImages.pergola.cam,
    ...productImages.pergola.pno,
    ...productImages.pergola.polikarbon,
    ...productImages.guillotine,
    ...productImages.panjur,
    ...productImages.kt,
    ...productImages.sr
];

const getGridClass = (index: number) => {
    if (index % 5 === 0) return "md:col-span-2 md:row-span-2";
    if (index % 7 === 0) return "md:col-span-2 md:row-span-1";
    return "col-span-1";
};

export function HomeGallery({ lng }: { lng: string }) {
    const INITIAL_COUNT = 6;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const cards = allImages.slice(0, visibleCount).map((image, index) => ({
        id: index + 1,
        className: getGridClass(index),
        thumbnail: image.url,
        content: (
            <div className="absolute bottom-4 left-4 z-50 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                <FaLocationDot className="text-[#B08D57] w-4 h-4" />
                <p className="text-white font-medium text-sm drop-shadow-md">
                    {image.location}
                </p>
            </div>
        ),
    }));

    const handleLoadMore = () => {
        setVisibleCount(allImages.length);
    };

    return (
        <div className="w-full flex flex-col items-center py-12 md:py-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-center text-balance font-semibold tracking-[-0.015em] text-[#49494E] mb-10 px-4">
                {{ 
                    tr: 'Tüm Projelerimiz', 
                    en: 'All Our Projects', // "Our Projects" de olur, "All" daha kapsayıcı durur
                    fr: 'Tous Nos Projets', 
                    de: 'Alle Unsere Projekte' 
                }[lng] || 'Our Projects'}
            </h2>
            
            <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col">
                
                {/* ÇÖZÜM: Yükseklik sınırları tamamen kaldırıldı. 
                    Grid içeriğine göre "h-auto" ve "min-h-[60vh]" (ekranın %60'ı) verildi.
                    Ayrıca içindeki LayoutGrid'e minimum bir alan açıldı.
                */}
                <div className="w-full h-auto min-h-[50vh] md:min-h-[60vh] transition-all duration-700 ease-in-out relative"> 
                    <LayoutGrid cards={cards} />
                </div>

                {visibleCount < allImages.length && (
                    /* Mobilde margin-top daha yüksek (mt-8), masaüstünde daha düşük (md:mt-4) */
                    <div className="flex justify-center mt-8 md:mt-4 relative z-10">
                        <button 
                            onClick={handleLoadMore}
                            className="relative group flex items-center justify-center gap-2 bg-[#49494E] text-white px-16 py-4 rounded-full shadow-xl border border-[#B08D57]/50 hover:border-[#B08D57] transition-all duration-300 cursor-pointer overflow-hidden min-w-[240px]"
                        >
                            <NoiseOverlay />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-50"></div>
                            
                            <span className="relative text-lg font-bold tracking-wide group-hover:text-[#B08D57] transition-colors duration-300">
                                {{ 
                                    tr: 'Tümünü Gör', 
                                    en: 'Load More', 
                                    fr: 'Voir Plus', 
                                    de: 'Mehr Laden' 
                                }[lng] || 'Load More'}
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
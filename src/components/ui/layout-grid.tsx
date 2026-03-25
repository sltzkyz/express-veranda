"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Card = {
    id: number;
    thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    const isProgrammaticScroll = useRef(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const renderTimeout = useRef<NodeJS.Timeout | null>(null);

    const goToTargetIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
        // ÇÖZÜM: Sonsuz döngü mantığı
        let targetIndex = index;
        if (targetIndex < 0) targetIndex = cards.length - 1; // Baştan geriye basılırsa sona git
        if (targetIndex >= cards.length) targetIndex = 0;    // Sondan ileri basılırsa başa dön
        
        isProgrammaticScroll.current = true;
        setSelectedIndex(targetIndex);
        
        if (renderTimeout.current) clearTimeout(renderTimeout.current);
        
        renderTimeout.current = setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTo({
                    left: targetIndex * scrollRef.current.clientWidth,
                    behavior: behavior,
                });
            }
            
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                isProgrammaticScroll.current = false;
            }, behavior === "smooth" ? 500 : 50);
        }, 10);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight") goToTargetIndex(selectedIndex + 1);
            if (e.key === "ArrowLeft") goToTargetIndex(selectedIndex - 1);
            if (e.key === "Escape") closeGallery();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedIndex]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (isProgrammaticScroll.current) return;

        const scrollLeft = e.currentTarget.scrollLeft;
        const width = e.currentTarget.clientWidth;
        if (width === 0) return;
        
        const newIndex = Math.round(scrollLeft / width);
        if (newIndex !== selectedIndex && newIndex >= 0 && newIndex < cards.length) {
            setSelectedIndex(newIndex);
        }
    };

    const openGallery = (index: number) => {
        document.body.style.overflow = "hidden";
        goToTargetIndex(index, "instant");
    };

    const closeGallery = () => {
        setSelectedIndex(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="w-full h-full p-4">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 relative">
                {cards.map((card, i) => (
                    <div
                        key={card.id}
                        onClick={() => openGallery(i)}
                        className="relative overflow-hidden rounded-xl h-48 md:h-64 cursor-pointer group"
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 z-10" />
                        <Image
                            src={card.thumbnail}
                            alt={`Express Veranda ${card.id}`}
                            fill
                            quality={75}
                            sizes="(max-width: 768px) 50vw, 33vw"
                            priority={i < 6}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div 
                    className="fixed inset-0 w-screen h-screen bg-black/95 z-[100] flex flex-col justify-center items-center"
                    onClick={closeGallery}
                >
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-[120] pointer-events-none">
                        <div className="text-white font-semibold px-4 py-2 bg-black/60 rounded-full backdrop-blur-xl pointer-events-auto">
                            {selectedIndex + 1} / {cards.length}
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); closeGallery(); }}
                            className="bg-white/10 p-2 rounded-full text-white hover:bg-[#B08D57] transition-all backdrop-blur-xl pointer-events-auto shadow-xl"
                        >
                            <IconX size={28} />
                        </button>
                    </div>

                    <div 
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cards.map((card) => (
                            <div 
                                key={`full-${card.id}`}
                                className="w-screen h-screen flex-shrink-0 snap-center flex justify-center items-center p-4 md:p-12"
                                onClick={closeGallery} 
                            >
                                <Image
                                    src={card.thumbnail}
                                    alt={`Express Veranda ${card.id}`}
                                    width={1920}
                                    height={1080}
                                    quality={95}
                                    priority
                                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain shadow-2xl"
                                    onClick={(e) => e.stopPropagation()} 
                                    draggable={false}
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); goToTargetIndex(selectedIndex - 1); }}
                        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 bg-white/5 p-4 rounded-full text-white/70 hover:bg-[#B08D57] hover:text-white transition-all z-[120] backdrop-blur-md"
                    >
                        <IconChevronLeft size={32} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); goToTargetIndex(selectedIndex + 1); }}
                        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 bg-white/5 p-4 rounded-full text-white/70 hover:bg-[#B08D57] hover:text-white transition-all z-[120] backdrop-blur-md"
                    >
                        <IconChevronRight size={32} />
                    </button>
                </div>
            )}
        </div>
    );
};
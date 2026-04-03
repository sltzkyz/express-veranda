"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ProductCard({
    title,
    description,
    image,
    tags,
    href,
    text
}: {
    title: string;
    description: string;
    image: string;
    tags: any[];
    href: string;
    text: string;
}) {
    return (
        <CardContainer className="inter-var w-full inline-block">
            <CardBody className="relative group/card hover:shadow-2xl shadow-black/10 bg-[#49494E] border-2 border-[#B08D57]/60 w-full min-h-[580px] h-full rounded-xl p-5 md:p-6 overflow-hidden flex flex-col">
                
               
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,transparent_80%)] pointer-events-none transition-opacity duration-500 group-hover/card:opacity-70"></div>

              
                <div 
                    className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-repeat"
                    style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: "120px"
                    }}
                ></div>

                <div className="relative z-10 flex flex-col flex-grow">
                  
                    <CardItem
                        translateZ="50"
                        className="text-xl md:text-2xl font-bold text-[#B08D57] group-hover/card:text-white transition-colors duration-300"
                    >
                        {title}
                    </CardItem>
                    
                 
                    <div className="flex flex-wrap gap-2 items-center mt-3">
                        {tags.map((tag) => (
                            <CardItem
                                key={tag.name}
                                translateZ="60"
                                className="cursor-pointer relative overflow-hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-zinc-800/50 text-neutral-300 border border-[#B08D57]/30 transition-all duration-300 hover:border-[#B08D57] hover:text-white"
                            >
                                <div 
                                    className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-repeat"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, backgroundSize: "100px" }}
                                ></div>
                                <span className="relative z-10 text-[#B08D57] [&>svg]:w-3 [&>svg]:h-3">{tag.icon}</span>
                                <span className="relative z-10">{tag.name}</span>
                            </CardItem>
                        ))}
                    </div>

                    {/* Açıklama */}
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm max-w-sm mt-4 text-neutral-300 leading-relaxed"
                    >
                        {description}
                    </CardItem>

                    {/* Alt Alan (Resim ve Buton) */}
                    <div className="mt-auto pt-6 flex flex-col gap-6">
                        <CardItem translateZ="100" className="w-full">
                            <Image
                                src={image}
                                height="1000"
                                width="1000"
                                quality={50}
                                className="h-48 md:h-56 w-full object-cover rounded-xl group-hover/card:shadow-2xl border border-white/10 grayscale-[20%] group-hover/card:grayscale-0 transition-all duration-500"
                                alt={title}
                            />
                        </CardItem>

                        <div className="flex justify-end items-center">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href={href}
                                // ÇÖZÜM: Mobilde 'w-full', masaüstünde 'w-auto' ve sağa yaslı (justify-end)
                                className="w-full md:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#B08D57] hover:bg-[#906C3A] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                            >
                                {text} <span>→</span>
                            </CardItem>
                        </div>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
}
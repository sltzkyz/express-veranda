"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { features } from "@/lib/config";

export function FeaturesSection({ featureTitle, lng }: { featureTitle: string, lng: string }) {
    return (
        <div className="mt-25 w-full flex flex-col">
            <h2 className="text-center text-balance text-5xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.015em] text-[#49494E]">
                {featureTitle}
            </h2>
            
            {/* mobilde 1, masaüstünde 3 sütun (grid-cols-1 lg:grid-cols-3) olarak düzelttim ki responsive olsun */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto w-full px-4 mt-16">
                {features.map((feature: any) => (
                    <WobbleCard 
                        key={feature.id} 
                        containerClassName="col-span-1 min-h-[300px] bg-[#49494E] border-2 border-[#B08D57]/60 shadow-xl shadow-black/10 group"
                    >
                        {/* 1. İKON KUTUSU (Başlığın hemen üstünde sol tarafta) */}
                        <div className="w-14 h-14 bg-[#B08D57]/20 text-[#B08D57] flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#B08D57] group-hover:text-white transition-colors duration-300 border border-[#B08D57]/50 shadow-md">
                            {feature.icon}
                        </div>

                        {/* 2. METİN İÇERİKLERİ */}
                        <div className="w-full relative z-20">
                            <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-[#B08D57]">
                                {feature.title[lng]}
                            </h2>
                            <p className="mt-4 text-left text-base/6 text-gray-300 leading-relaxed">
                                {feature.description[lng]}
                            </p>
                        </div>
                        
                        {/* RESİM (<img />) ETİKETİ TAMAMEN KALDIRILDI */}
                    </WobbleCard>
                ))}
            </div>
        </div>
    );
}
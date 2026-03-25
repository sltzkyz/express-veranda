"use client"

import { products } from "@/lib/config";
import Link from "next/link";
import { useState } from "react";
import { ImageCardsSection } from "./ImageCards";

export default function ProductContent({ params, technicTitle }: { params: { id: string, lng: string }, technicTitle: string }) {
    if (!params.id) return null;

    const product = products.find((p) => p.id === Number(params.id));

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <p className="text-neutral-500 mb-4">
                    {params.lng === 'tr' ? 'Veranda modeli bulunamadı.' : 'Product model not found.'}
                </p>
                <Link href={`/${params.lng}`} className="underline text-blue-600">
                    {params.lng === 'tr' ? 'Ana sayfaya dön' : 'Back to home'}
                </Link>
            </div>
        );
    }

    const defaultIndex = product.images.findIndex(img => img.class === "md:col-span-2");
    const [currentImageIndex, setCurrentImageIndex] = useState(defaultIndex !== -1 ? defaultIndex : 0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <main className="max-w-5xl mx-auto pt-42 px-4 py-8 flex flex-col gap-10">

            {/* Ürün Başlığı, Rozetler ve Açıklama Alanı */}
            <div className="flex flex-col gap-4 text-center items-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#49494E] tracking">
                    {(product.title as any)[params.lng]}
                </h1>

                {/* Premium Rozetler (Tagler) */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {product.tags.map((tag) => (
                        <div
                            key={`simple-${tag.name}`}
                            className="relative overflow-hidden inline-flex items-center justify-center bg-[#49494E] border border-[#B08D57]/50 shadow-sm px-4 py-1.5 rounded-full text-sm font-medium tracking-wide group hover:border-[#B08D57] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                        >
                            {/* 1. Katman: Radial Işık */}
                            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
                            
                            {/* 2. Katman: SVG Noise (Kumlanma) */}
                            <div 
                                className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-repeat"
                                style={{ 
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    backgroundSize: "120px"
                                }}
                            ></div>

                            {/* İçerik: İkon ve Yazı */}
                            <div className="relative z-10 flex items-center gap-2 text-zinc-100 group-hover:text-[#B08D57] transition-colors duration-300">
                                {tag.icon && (
                                    <span className="text-[#B08D57] [&>svg]:w-3.5 [&>svg]:h-3.5">
                                        {tag.icon}
                                    </span>
                                )}
                                <span>{(tag.name as any)[params.lng]}</span>
                            </div>
                        </div>
                    ))}
                </div>


                <p className="text-lg text-neutral-600 leading-relaxed mt-4">
                    {(product.description as any)[params.lng]}
                </p>
            </div>

            <hr className="border-zinc-400  my-1" />
            

            <ImageCardsSection lng={params.lng} images={product.images} />
            

            <div className="h-24 md:h-25"></div>
        </main>
    )
}
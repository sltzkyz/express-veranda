"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function ImageCardsSection({ lng, images }: { lng: string, images: { url: string, class: string }[] }) {
    return (
        <div className="w-full flex flex-col items-center py-12">
            <h3 className="text-center text-4xl mb-10 font-bold text-[#49494E]">
                {lng === 'tr' ? 'Resimler' : 'Images'}
            </h3>
            
            <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6">
                <LayoutGrid cards={images.map((image, index) => ({
                    id: index + 1,
                    className: image.class,
                    content: <div />,
                    thumbnail: image.url,
                }))} />
            </div>
        </div>
    );
}
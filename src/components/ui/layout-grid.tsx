"use client";
import React, { JSX, useState } from "react";
import { motion } from "framer-motion"; // Kütüphane ismini kontrol et: 'framer-motion' olmalı
import { cn } from "@/lib/utils";
import Image from "next/image"; // Next.js Image bileşeni eklendi

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

// Next.js Image bileşenini motion ile uyumlu hale getiriyoruz
const MotionImage = motion.create(Image);

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div>
      <div className="w-full max-w-7xl h-full p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 relative">
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className, "")}>
            <motion.div
              onClick={() => handleClick(card)} 
              className={cn(
                card.className,
                "relative overflow-hidden group",
                selected?.id === card.id
                  ? "rounded-lg cursor-pointer fixed inset-0 w-[95vw] md:w-[80vw] h-[80vh] max-w-6xl m-auto z-50 flex justify-center items-center flex-wrap flex-col shadow-2xl"
                  : "bg-transparent rounded-xl w-full h-64"
              )}
              layoutId={`card-${card.id}`}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}

{/* YENİ YÜKSEK KALİTELİ IMAGE BİLEŞENİ */}
              <MotionImage
                layoutId={`image-${card.id}-image`}
                src={card.thumbnail}
                alt={`Express Veranda - ${card.id}`}
                fill 
                // KALİTE AYARI: 1-100 arası. 95 mükemmel bir dengedir.
                quality={95} 
                // SIZES GÜNCELLEMESİ: Resmin kalitesini korumak için tarayıcıya 
                // daha yüksek çözünürlüklü versiyonu istemesini söylüyoruz.
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                priority={i < 4}
                className={cn(
                  "absolute inset-0 w-full h-full transition duration-300",
                  selected?.id === card.id ? "object-contain" : "object-cover"
                )}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />

              {selected?.id !== card.id && (
                <div className={cn(
                  "absolute inset-0 bg-black/50 transition-opacity duration-300 flex flex-col justify-end p-4 z-20",
                  "opacity-0 group-hover:opacity-100"
                )}>
                </div>
              )}

            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed h-screen w-screen left-0 top-0 opacity-0 z-40 bg-black",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.7 : 0 }}
      />
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
      </motion.div>
    </div>
  );
};
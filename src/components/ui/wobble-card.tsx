"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden bg-[#49494E]", 
        containerClassName
      )}
    >
      <div
        className="cursor-pointer relative h-full overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
    
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
        
      
        <div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay bg-repeat"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "120px"
          }}
        />

        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x / 2}px, ${-mousePosition.y / 2}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("relative z-10 h-full px-6 py-12 sm:px-10", className)} // py-20 çok genişti, 12 ile daha dengeli yaptık
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};


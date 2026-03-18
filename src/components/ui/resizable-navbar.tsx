"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // EKLENDİ
import React, { useRef, useState, useEffect } from "react";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname(); // EKLENDİ
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // ÇÖZÜM: Ana sayfaları belirliyoruz
    const isHomePage = pathname === "/" || pathname === "/tr" || pathname === "/en" || pathname === "/fr" || pathname === "/de";
    
    // ÇÖZÜM: Ana sayfada değilse varsayılan olarak 'visible' (kompakt) başlar
    const [visible, setVisible] = useState<boolean>(!isHomePage);

    // ÇÖZÜM: Sayfa değiştiğinde kontrol et
    useEffect(() => {
        if (!isHomePage) {
            setVisible(true); // Ana sayfa değilse hep true (kompakt mod)
        } else {
            setVisible(window.scrollY > 100); // Ana sayfadaysa scroll'a göre ayarla
        }
    }, [pathname, isHomePage]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // ÇÖZÜM: Ana sayfa değilse scroll eventini yoksay ve hep true tut
        if (!isHomePage) {
            setVisible(true);
            return;
        }

        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed pt-4 inset-x-0 top-1 z-50 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 10px 30px -10px rgba(0,0,0,0.5)" // Daha koyu ve şık bir gölge
                    : "none",
                width: visible ? "50%" : "100%", // Çok küçülmemesi için 40% yerine 50% yaptım
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "800px",
            }}
            className={cn(
                "relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex bg-transparent border border-transparent transition-colors duration-300",
                // Masaüstü barı aşağı kayınca çıkacak olan Antrasit arkaplan ve Vizon çerçeve
                visible && "bg-[#49494E]/90 border-[#B08D57]/50",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                // Neler değişti? 
                // 1. "absolute inset-0" kodunu sildik (artık havada asılı kalıp ortalanmayacak).
                // 2. "justify-center" yerine "justify-end" yazdık (sağa yasladık).
                "hidden flex-1 flex-row items-center justify-end space-x-2 text-sm font-medium text-gray-300 transition duration-200 lg:flex lg:space-x-2",
                className,
            )}
        >
            {items.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
                    key={`link-${idx}`}
                    href={item.link}
                >
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-[#B08D57]"
                        />
                    )}
                    <span className="relative z-20 text-lg font-banter">{item.name}</span>
                </a>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 10px 30px -10px rgba(0,0,0,0.5)"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "1rem" : "0px",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto rounded-2xl flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden border border-transparent transition-colors duration-300",
                // Mobil bar aşağı inince çıkacak Antrasit ve Vizon sınır
                visible && "bg-[#49494E]/95 border-[#B08D57]/50",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={cn(
                        // Mobil menü açıldığında çıkan devasa kutu. Rengi Antrasit, kenarlığı Vizon.
                        "absolute inset-x-0 top-19 z-99 flex w-full flex-col items-start justify-start gap-4 rounded-xl px-4 py-8 bg-[#49494E] border border-[#B08D57] shadow-2xl shadow-black/50",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        // Hamburger Menü ve Çarpı ikonu Vizon rengine (#B08D57) çevrildi
        isOpen ? (
            <IconX className="text-[#B08D57] cursor-pointer" onClick={onClick} />
        ) : (
            <IconMenu2 className="text-[#B08D57] cursor-pointer" onClick={onClick} />
        )
    );
};

export const NavbarLogo = ({ onClick }: { onClick?: () => void }) => {
    return (
        <Link
            href="#"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-white"
        >
            <img
                src="/logo.png"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onClick={onClick}
                alt="logo"
                className="w-10 h-10 object-contain"
            />
            {/* Yazı (Marka İsmi) Vizon rengine çevrildi */}
            <h3 className="text-[#B08D57] font-bold text-lg tracking-wider">
                Express Veranda
            </h3>
        </Link>
    );
};

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    ...props
}: {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient" | "vizon";
} & (
        | React.ComponentPropsWithoutRef<"a">
        | React.ComponentPropsWithoutRef<"button">
    )) => {
    const baseStyles =
        "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const variantStyles = {
        primary: "bg-white text-black",
        secondary: "bg-transparent text-white",
        dark: "bg-[#49494E] text-white border border-[#B08D57]",
        vizon: "bg-[#B08D57] text-white hover:bg-[#906C3A]", 
        gradient: "bg-gradient-to-b from-[#B08D57] to-[#906C3A] text-white",
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Tag>
    );
};
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
import { usePathname, useParams } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
    const pathname = usePathname();
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const isHomePage = pathname === "/" || pathname === "/tr" || pathname === "/en" || pathname === "/fr" || pathname === "/de";

    const [visible, setVisible] = useState<boolean>(!isHomePage);

    useEffect(() => {
        if (!isHomePage) {
            setVisible(true);
        } else {
            setVisible(window.scrollY > 100);
        }
    }, [pathname, isHomePage]);

    useMotionValueEvent(scrollY, "change", (latest) => {
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
                    ? "0 10px 30px -10px rgba(0,0,0,0.5)"
                    : "none",
                width: visible ? "50%" : "100%",
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
    const params = useParams();
    const lng = (params?.lng as string) || "tr";

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "hidden flex-1 flex-row items-center justify-end space-x-2 text-sm font-medium text-gray-300 transition duration-200 lg:flex lg:space-x-2",
                className,
            )}
        >
            {items.map((item, idx) => {
                const isExternal = item.link.startsWith("http") || item.link.startsWith("#");
                const localizedLink = isExternal ? item.link : `/${lng}${item.link === "/" ? "" : item.link}`;

                return (
                    <Link
                        onMouseEnter={() => setHovered(idx)}
                        onClick={onItemClick}
                        className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
                        key={`link-${idx}`}
                        href={localizedLink}
                    >
                        {hovered === idx && (
                            <motion.div
                                layoutId="hovered"
                                className="absolute inset-0 h-full w-full rounded-full bg-[#B08D57]"
                            />
                        )}
                        <span className="relative z-20 text-lg font-banter">{item.name}</span>
                    </Link>
                );
            })}
        </motion.div>
    );
};


export const MobileNavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const params = useParams();
    const lng = (params?.lng as string) || "tr";

    return (
        <div className={cn("flex w-full flex-col", className)}>
            {items.map((item, idx) => {
                const isExternal = item.link.startsWith("http") || item.link.startsWith("#");
                
                const localizedLink = isExternal ? item.link : `/${lng}${item.link === "/" ? "" : item.link}`;

                return (
                    <Link
                        key={`mobile-link-${idx}`}
                        href={localizedLink}
                        onClick={onItemClick}
                        
                        className="flex items-center w-full py-4 px-4 text-lg text-gray-200 rounded-lg transition-colors hover:bg-white/5 "
                    >
                        {item.name}
                    </Link>
                );
            })}
        </div>
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
                visible && "bg-[#49494E]/95 border-[#B08D57]/50",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
    return (
        <div className={cn("flex w-full flex-row items-center justify-between relative z-[60]", className)}>
            {children}
        </div>
    );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleScroll = () => {
            onClose();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen, onClose]);

    return (
        <>
            {mounted && typeof document !== "undefined" && isOpen && createPortal(
                <div
                    className="fixed inset-0 z-[40] bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />,
                document.body
            )}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }}
                        exit={{ opacity: 0, y: -10, transition: { duration: 0.1, ease: "easeIn" } }}
                        className={cn(
                            // container
                            "absolute inset-x-0 top-19 z-[99] flex w-full flex-col items-stretch justify-start gap-1 rounded-xl px-4 py-1 bg-[#49494E] border border-[#B08D57] shadow-2xl shadow-black/50",
                            
                            // links
                            "[&_a]:flex [&_a]:items-center [&_a]:w-full [&_a]:py-4 [&_a]:px-4 [&_a]:text-lg [&_a]:rounded-lg [&_a]:transition-colors hover:[&_a]:bg-white/5 active:[&_a]:bg-[#B08D57]/20",
                            
                            className,
                        )}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void; }) => {
    return (
        isOpen ? (
            <IconX className="text-[#B08D57] cursor-pointer" onClick={onClick} />
        ) : (
            <IconMenu2 className="text-[#B08D57] cursor-pointer" onClick={onClick} />
        )
    );
};

export const NavbarLogo = ({ onClick }: { onClick?: () => void }) => {
    const params = useParams();
    const lng = (params?.lng as string) || "tr";

    return (
        <Link
            href={`/${lng}`}
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-white"
            onClick={onClick}
        >
            <img
                src="/logo.png"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                alt="logo"
                className="w-10 h-10 object-contain"
            />
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
    const params = useParams();
    const lng = (params?.lng as string) || "tr";

    const isExternal = href?.startsWith("http") || href?.startsWith("#");
    const localizedHref = href ? (isExternal ? href : `/${lng}${href === "/" ? "" : href}`) : undefined;

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
            href={localizedHref}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Tag>
    );
};

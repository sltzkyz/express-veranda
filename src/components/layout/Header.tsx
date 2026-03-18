"use client"

import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/ui/resizable-navbar";
import { navbarItems } from "@/lib/config";
import Link from "next/link";
import { useContext, useState } from "react";

export default function HeaderComponent({ lng }: { lng: string }) {

    const navItems = navbarItems.map(item => ({
        name: (item.name as any)[lng] || item.name.en,
        link: item.link,
    }))

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Navbar className="z-99">
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                </NavBody>

                <MobileNav className="rounded-lg">
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>
                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        className=""
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-300"
                            >
                                <span className="block font-banter">{item.name}</span>
                            </Link>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </>
    );
}
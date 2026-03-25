"use client"

import HeaderComponent from "@/components/layout/Header";
import { useLayoutEffect } from "react";
import Aos from "aos";
import Footer from "./Footer";
export default function LayoutIndex({ children, lng }: { children: React.ReactNode, lng: string }) {

    useLayoutEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        })
        Aos.refresh()
    })

    return (
        <>
            <HeaderComponent lng={lng} />
            {children}
            <Footer lng={lng} />
        </>
    );
}
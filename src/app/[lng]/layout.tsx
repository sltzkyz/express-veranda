import type { Metadata } from "next";
import "../globals.css";
import "aos/dist/aos.css";
import LayoutIndex from "@/components/layout/Index";

import SmoothScrolling from "@/components/LenisScrolling"; 

import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export const metadata: Metadata = {
    title: "Express Veranda | Winter Gardens & Pergola Systems",
    keywords: [
        "Express Veranda",
        "Guillotine Glass",
        "Sliding Glass",
        "Retractable Glass",
        "Winter Gardens",
        "Bioclimatic Pergolas",
        "Roller Shutters"
    ],
    description: "Premium retractable glass, winter gardens, and bioclimatic pergolas. Elevate your living spaces with Express Veranda's modern architectural solutions.",
    creator: "Express Veranda",
    openGraph: {
        title: "Express Veranda | Winter Gardens & Pergola Systems",
        description: "Transform your indoor and outdoor spaces with our durable and aesthetic retractable glass systems. Discover 4-season comfort.",
        url: "https://www.expressveranda.com",
        siteName: "Express Veranda",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Express Veranda | Winter Gardens & Pergola Systems",
        description: "Premium retractable glass, winter gardens, and bioclimatic pergolas for modern living spaces."
    },
    icons: {
        icon: '/icon-v1.svg',
        apple: '/icon-v1.svg',
    }
};

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

type Props = {
    children: React.ReactNode;
    params: Promise<{ lng: string }>;
};

export default async function RootLayout({
    children,
    params,
}: Props) {
    const { lng } = await params;

    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
         
            <body className={`antialiased flex flex-col min-h-screen`} suppressHydrationWarning={true}>
                
               
                <SmoothScrolling>
                    <LayoutIndex lng={lng}>
                        {children}
                    </LayoutIndex>
                </SmoothScrolling>
                
            </body>
        </html>
    );
}
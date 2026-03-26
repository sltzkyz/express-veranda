import { useTranslation } from '../i18n'
import { FeaturesSection } from "@/components/home/Features";
import { ProductCard } from "@/components/home/ProductCard";
import { products } from '@/lib/config';
import { EuropeRouteMap } from '@/components/EuropeRouteMap';
import { HomeGallery } from '@/components/HomeGallery'; // Dosyayı nereye açtıysan oradan

type Props = {
    params: Promise<{ lng: string }>
}

export default async function Page({ params }: Props) {
    const { lng } = await params as any;
    const { t } = await useTranslation(lng)
    
    return (
        <div className="flex flex-col gap-4 items-center overflow-hidden">
            {/* Hero bileşenine t() ile verileri yolluyoruz */}
            <Hero 
                heroBrand={t("pages.home.hero.brand")} 
                heroTitle={t("pages.home.hero.title")} 
            />

            <FeaturesSection featureTitle={t("pages.home.features.title")} lng={lng} />

            {/* ÜRÜNLER BÖLÜMÜ */}
            <h2 className="text-5xl md:text-5xl lg:text-7xl text-center text-balance font-semibold tracking-[-0.015em] text-[#49494E] mt-24 px-4">
                {t("pages.home.products.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10 w-full max-w-[1400px]" id='products'>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={(product.title as any)[lng]}
                        description={(product.description as any)[lng]}
                        image={product.images[0].url}
                        tags={product.tags.map((tag) => ({
                            name: (tag.name as any)[lng],
                            icon: tag.icon
                        }))}
                        href={`/${lng}/products/${product.id}`}
                        text={t("pages.home.products.cardText")}
                    />
                ))}
            </div>

            {/* LOJİSTİK / AVRUPA ROTASI BÖLÜMÜ 
            <h2 className="text-5xl md:text-5xl lg:text-7xl text-center text-balance font-semibold tracking-[-0.015em] text-[#49494E] mt-24 px-4">
                {t("pages.home.routeMap.title")}
            </h2>
            
            <div className="w-full pb-24">
                <EuropeRouteMap />
            </div>
            */}

            <HomeGallery lng={lng} />
        </div >
    )
}

function Hero({ heroBrand, heroTitle }: { heroBrand: string, heroTitle: string }) {
    // Dil dosyasından gelen metni renk vermek için ilk kelime ve kalanı olarak bölüyoruz
    const [firstWord, ...restWords] = heroTitle.split(' ');
    const restOfTitle = restWords.join(' ');

    return (
        <div id="home" className="relative w-full h-screen overflow-hidden bg-[#B08D57] split-container">
            {/* Animasyon ve Çapraz Kesim İçin Gerekli CSS */}
            <style dangerouslySetInnerHTML={{ __html: `
                .split-container {
                    /* Ortadaki çizginin konumu (Başlangıçta %50 - Tam orta) */
                    --split-pos: 50%;
                    /* Çizginin çaprazlık derecesi */
                    --skew: 10%; 
                    /* İki fotoğraf arasındaki boşluk kalınlığı */
                    --gap: 2px;
                }
                
                /* Sol/Üst fotoğrafa hover olunca alan genişlesin */
                .split-container:has(.split-left:hover) { --split-pos: 75%; }
                
                /* Sağ/Alt fotoğrafa hover olunca alan genişlesin */
                .split-container:has(.split-right:hover) { --split-pos: 25%; }

                /* MOBİL İÇİN: ÜST VE ALT OLARAK BÖL (Yatay Çizgi) */
                @media (max-width: 768px) {
                    .split-container {
                        --skew: 5%; /* Mobilde açıyı çok keskin olmasın diye daralttık */
                    }
                    /* Sol fotoğraf mobilde "Üst Fotoğraf" oluyor */
                    .split-left {
                        clip-path: polygon(0 0, 100% 0, 100% calc(var(--split-pos) - var(--skew) - var(--gap)), 0 calc(var(--split-pos) + var(--skew) - var(--gap)));
                        transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    /* Sağ fotoğraf mobilde "Alt Fotoğraf" oluyor. object-cover varsayılanı (üst) yerine
                       'object-position' ile dikeyde ortadan biraz yukarıyı (%40) gösterelim. */
                    .split-right {
                        clip-path: polygon(0 calc(var(--split-pos) + var(--skew) + var(--gap)), 100% calc(var(--split-pos) - var(--skew) + var(--gap)), 100% 100%, 0 100%);
                        transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .split-right .split-img {
                        object-position: 50% 40%; 
                    }
                }

                /* MASAÜSTÜ İÇİN: SOL VE SAĞ OLARAK BÖL (Dikey Çizgi - Orijinal) */
                @media (min-width: 769px) {
                    .split-left {
                        clip-path: polygon(0 0, calc(var(--split-pos) + var(--skew) - var(--gap)) 0, calc(var(--split-pos) - var(--skew) - var(--gap)) 100%, 0 100%);
                        transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .split-right {
                        clip-path: polygon(calc(var(--split-pos) + var(--skew) + var(--gap)) 0, 100% 0, 100% 100%, calc(var(--split-pos) - var(--skew) + var(--gap)) 100%);
                        transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                }

                .split-img {
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s;
                }

                /* Biri genişlerken diğer fotoğrafın hafif kararması ve küçülmesi */
                .split-container:has(.split-left:hover) .split-right .split-img { filter: grayscale(50%) brightness(40%); transform: scale(1.05); }
                .split-container:has(.split-right:hover) .split-left .split-img { filter: grayscale(50%) brightness(40%); transform: scale(1.05); }
                
                /* Hover olan fotoğrafın hafifçe yakınlaşması (Zoom in efekti) */
                .split-left:hover .split-img, .split-right:hover .split-img { transform: scale(1.08); }
            `}} />

            {/* 1. FOTOĞRAF (Masaüstünde Sol, Mobilde Üst) */}
            <div className="absolute inset-0 w-full h-full split-left z-10">
                <img 
                    src="/images/vl1.jpg" 
                    className="object-cover w-full h-full absolute inset-0 split-img" 
                    draggable={false} 
                    alt="Express Veranda 1"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/10 transition-colors duration-700 pointer-events-none"></div>
            </div>

            {/* 2. FOTOĞRAF (Masaüstünde Sağ, Mobilde Alt) */}
            <div className="absolute inset-0 w-full h-full split-right z-10">
                <img 
                    src="/images/vl2.jpg" 
                    className="object-cover w-full h-full absolute inset-0 split-img" 
                    draggable={false} 
                    alt="Express Veranda 2"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/10 transition-colors duration-700 pointer-events-none"></div>
            </div>

            {/* BAŞLIK GRUBU - SOL ALT YERLEŞİM */}
            <div className="absolute bottom-32 left-8 md:bottom-24 md:left-16 z-20 flex flex-col items-start text-left pointer-events-none max-w-xl md:max-w-2xl lg:max-w-3xl">
                
                {/* HSM YAPI - Tamamen Beyaz, Çok Zarif, Harf Arası Çok Açık Üst Başlık */}
                <span className="block m-0 p-0 text-white font-bold tracking-[0.4em] text-xs md:text-sm lg:text-base mb-2 uppercase drop-shadow-md opacity-90">
                    {heroBrand}
                </span>

                {/* EXPRESS VERANDA - Dinamik Renkli Ana Başlık */}
                <h1 className="m-0 p-0 text-4xl md:text-6xl lg:text-7xl font-bold font-mc-latin tracking-tight leading-none drop-shadow-2xl text-white text-shadow-2xs">
                    <span className="text-[#B08D57]">{firstWord}</span> {restOfTitle}
                </h1>
                
            </div>
        </div>
    );
}
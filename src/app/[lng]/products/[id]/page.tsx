import { notFound } from "next/navigation";
import { Metadata } from 'next';
import { products } from "@/lib/config";
import ProductContent from "./ProductContent";
import { useTranslation } from "@/app/i18n";

export const dynamic = 'force-dynamic'


export async function generateMetadata({ params }: {
  params: { id: string, lng: string };
}): Promise<Metadata> {

  const args = await params;
  const product = products.find((product) => product.id === Number(args.id));
  const lng = args.lng as any
  return {
    title: `${(product?.title as any)?.[lng] || 'Product'}`,
    description: (product?.description as any)?.[lng] || ''
  };
}

export default async function ProductPage({ params }: { params: { id: string, lng: string } }) {
  const id = await params;
  if (!id.id) {
    notFound();
  }

  const product = products.find((product) => product.id === Number(id.id));

  if (!product) {
    notFound();
  }
  const lng = id.lng as any
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: (product?.title as any)?.[lng],
    description: (product?.description as any)?.[lng],
    image: product.images?.[0].url,
    sku: product.id,
    version: product.images?.[0].default ? "1.0.0" : "1.0.1",
    brand: {
      "@type": "Brand",
      name: (product?.title as any)?.[lng],
    }
  }
  const { t } = await useTranslation(lng)

  return (
    <div className="">
      <ProductContent params={{
        id: id.id,
        lng: id.lng,
      }}
        technicTitle={t('product.technicTitle')}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
    </div>
  );
}

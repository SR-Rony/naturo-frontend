"use client";

import { ProductCard } from "../ProductItem";

const sampleProducts = [
  { id: "1", name: "কালোজিরা ও খলিশা ফুলের মধুর কম্বো", price: 350, regularPrice: 500, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp" },
  { id: "2", name: "প্রিমিয়াম বিটরুট পাউডার ", price: 280, regularPrice: 400, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/01_KMGpjsa5m.webp" },
  { id: "3", name: "কালোজিরা ও খলিশা ফুলের মধুর কম্বো", price: 150, regularPrice: 200, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp" },
  { id: "4", name: "প্রিমিয়াম বিটরুট পাউডার ", price: 150, regularPrice: 200, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/01_KMGpjsa5m.webp" },
  { id: "5", name: "কালোজিরা ও খলিশা ফুলের মধুর কম্বো", price: 600, regularPrice: 800, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp" },
  { id: "6", name: "প্রিমিয়াম বিটরুট পাউডার ", price: 600, regularPrice: 800, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/01_KMGpjsa5m.webp" },
  { id: "7", name: "কালোজিরা ও খলিশা ফুলের মধুর কম্বো", price: 600, regularPrice: 800, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp" },
  { id: "8", name: "প্রিমিয়াম বিটরুট পাউডার ", price: 600, regularPrice: 800, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/01_KMGpjsa5m.webp" },
];

export function AllProducts() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-5">
        <h2 className="border-b-2 font-bold border-black inline-block">All Products</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

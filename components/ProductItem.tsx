import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    regularPrice?: number;
    image: string;
  };
  onAddToCart?: (id: string) => void;
  onView?: (id: string) => void;
}

export function ProductCard({ product, onAddToCart, onView }: ProductCardProps) {
  return (
    <div className="group bg-white p-2 relative border border-gray-200 shadow-[0_0_4px_rgba(0,0,0,0.1)] rounded-sm">
      {/* Product Image with padding */}
      <div className="relative h-70 mx-auto overflow-hidden box-border">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-sm"
        />
      </div>

      {/* Buttons below the image */}
      <div className="flex w-full mt-2">
        <Link
          href={`/product`}
          className="flex-1 flex justify-center items-center py-2 bg-[#F2F2F2] border-r border-gray-200 transition"
          onClick={() => onView?.(product.id)}
        >
          <Eye size={20} />
        </Link>
        <Link
          href={`/product/${product.id}`}
          className="flex-1 flex justify-center items-center py-2 transition bg-[#F2F2F2]"
          onClick={() => onAddToCart?.(product.id)}
        >
          <ShoppingCart size={20} />
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-0 mt-auto">
        <h3 className="text-lg font-semibold text-gray-800 ">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 font-bold">
          <span className="text-[#669900] text-2xl flex items-center gap-1">
            <span className="font-bold">৳</span> {product.price}
          </span>
          {product.regularPrice && (
            <span className="text-gray-400 line-through text-sm flex items-center gap-1">
              <span>৳</span> {product.regularPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

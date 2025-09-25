"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Related } from "@/components/relatead-product/Relatead";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const sampleProduct: Product = {
  id: "1",
  name: "কালোজিরা ও খলিশা ফুলের মধু | Blackseed & Kholisha Honey",
  price: 350,
  image:
    "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp",
  description: `

📌 পণ্যের সংক্ষিপ্ত পরিচিতি
‘বীজ হানি কম্বো’ হলো ন্যাচারোর তৈরি বিশেষ ভেষজ সমন্বয়। এই কম্বোতে থাকছে:

✅ ৫০০ গ্রাম সিড শরবত
✅ ৫০০ গ্রাম লিচু ফুলের মধু
✅ ২৫০ গ্রাম হিমালয়ান পিংক সল্ট

🌱 সিড শরবতের উপাদানসমূহ
✅ তোকমা দানা – হজমে সহায়ক ও শরীরে শীতলতা আনে
✅ তুলসি বীজ – রোগ প্রতিরোধ ক্ষমতা বাড়ায়
✅ হালিম বীজ – অ্যানিমিয়া ও হাড়ের স্বাস্থ্যে কার্যকর
✅ ইসবগুল – কোষ্ঠকাঠিন্য দূর করে ও পেট পরিষ্কার রাখে
✅ চিয়া সিড – মেটাবলিজম বাড়ায় ও শরীরকে এনার্জেটিক রাখে

💚 উপকারিতা
🩺 এ্যাসিডিটি, বদহজম ও কোষ্ঠকাঠিন্য দূর করে
🫀 হৃদপিণ্ডের যত্ন নেয় ও কোলেস্টেরল নিয়ন্ত্রণে সহায়তা করে
💪 রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং সংক্রমণ প্রতিরোধ করে
🧠 মস্তিষ্কের কার্যকারিতা ও মনোযোগ উন্নত করে
🔥 দেহের প্রদাহ ও হজমজনিত অস্বস্তি কমায়
⚡ শরীরে প্রাকৃতিক শক্তি ও উদ্যম যোগায়
🌿 রক্তশূন্যতা ও অ্যানিমিয়া প্রতিরোধে সহায়ক
🍯 প্রতিদিনের খাবারে স্বাস্থ্যকর ও সুস্বাদু সংযোজন

🥤 ব্যবহারবিধি
➡️ ১ গ্লাস পানিতে ১ চা চামচ সিড শরবত ভিজিয়ে নিন।
➡️ প্রয়োজনমত মধু ও হিমালয়ান পিংক সল্ট যোগ করুন।
➡️ ৫–১০ মিনিট পর পান করুন।
👉 প্রতিদিন ২–৩ বার সেবন করা যায়।

💡 বিশেষ টিপস
নিয়মিত ব্যবহার করলে –
✔ হজমশক্তি উন্নত হয়
✔ শরীরের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়
✔ এনার্জি লেভেল সবসময় উচ্চ থাকে
✔ এসিডিটি, কোষ্ঠকাঠিন্য ও অস্বস্তি অনেকাংশে নিয়ন্ত্রণে আসে

🌟 কেন আমাদের উপর আস্থা রাখবেন?
শতভাগ বিশুদ্ধ – শুধুই বীজ ও মধুর প্রাকৃতিক শক্তি।
🤝 বিশ্বাসযোগ্যতা ও সততা: ন্যাচারো সবসময় মান ও স্বাস্থ্যের সাথে আপোষ করে না।
📢 'Back to Nature' মিশনের অংশ: রাসায়নিকের পরিবর্তে প্রকৃতির দিকে ফেরার আন্দোলনে ‘বীজ হানি কম্বো’ আপনার সুস্থ জীবনের নতুন পথপ্রদর্শক।
`,
};

export default function ViewProductPage() {
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-20 shadow-xl rounded-2xl">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={sampleProduct.image}
            alt={sampleProduct.name}
            width={500}
            height={500}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {sampleProduct.name}
          </h1>
          <h2 className="text-xl font-bold text-primary mb-6">
            ৳ {sampleProduct.price}
          </h2>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              className="px-4 py-2 border rounded-md cursor-pointer"
              onClick={decreaseQty}
            >
              -
            </button>
            <span className="px-4 py-2 border rounded-md">{qty}</span>
            <button
              className="px-4 py-2 border rounded-md cursor-pointer"
              onClick={increaseQty}
            >
              +
            </button>
          </div>

          {/* Add to Cart / Order Button */}
          <div className="flex justify-between gap-4">
            <button className="py-4 w-1/2 border-2 border-black rounded-sm font-bold cursor-pointer">
              কার্টে যোগ করুন
            </button>
            <button className="flex items-center justify-center w-1/2 gap-2 py-2 bg-[#FA582D] cursor-pointer text-white rounded-sm font-bold">
              <ShoppingBag size={20} className="animate-bounceSlow" />
              অর্ডার করুন
            </button>
          </div>
          <button className="py-4  w-full mt-5 border-2 border-black rounded-sm font-bold cursor-pointer ">
              কল অর্ডার: 09639812525
            </button>
            <div className="border-b border-gray-300 pb-8"></div>
            <p className="mt-5">ক্যাটাগরি: Organic Food</p>
        </div>
      </div>

      {/* Description Section at Bottom */}
      <div className="mt-10 space-y-4 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">🌿🍯 বীজ হানি কম্বো – সুস্থতা ও শক্তির এক প্রাকৃতিক আশ্চর্য 🌿🍯</h2>
        {sampleProduct.description.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
    {/* relatead product */}
    <Related/>
    <Related/>
    </div>
  );
}

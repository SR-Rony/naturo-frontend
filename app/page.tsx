import { AllProducts } from "@/components/all product/All";
import BannerSlider from "@/components/banner";
import { BestSell } from "@/components/bestsell/BestSell";
import { Honey } from "@/components/honey/Honey";
import { Organic } from "@/components/organic food/Organic";
import { Recently } from "@/components/recently viewed/Recently";

export default function Home() {
  return (
    <div>
      <BannerSlider/>
      <BestSell/>
      <Honey/>
      <Organic/>
      <AllProducts/>
      <Recently/>
    </div>
  );
}

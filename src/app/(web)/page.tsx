import { getFeaturedRoom } from "@/libs/apis";
import FeaturedRoom from "../../components/FeaturedRoom.tsx/FeaturedRoom";
import Gallery from "../../components/Gallery/Gallery";
import HeroSection from "../../components/HeroSection/HeroSection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageSearch from "../../components/PageSearch/PageSearch";

export default async function Home() {
  const featuredRoom = await getFeaturedRoom();

  console.log(featuredRoom);
  return (
    <div className="duration-300">
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
    </div>
  );
}

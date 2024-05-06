import Gallery from "../components/Gallery/Gallery";
import HeroSection from "../components/HeroSection/HeroSection";
import PageSearch from "../components/PageSearch/PageSearch";
import Container from "./Container";


export default function Home() {
  return (
    <div>
      <Container>
        <HeroSection />
        {/* <FeaturedRooms /> */}
        <PageSearch />
        <Gallery />
      </Container>
    </div>
  )
}

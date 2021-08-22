import CarouselComponent from "../components/CarouselComponent";
import Description from "../components/Description";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Headers />

      <Banner />

      <Nav />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 px-24"
        style={{ marginTop: "-24rem" }}
      >
        <Description />

        <CarouselComponent />
      </div>

      <Footer />
    </>
  );
}

import AboutHome from "../../components/AboutHome/AboutHome";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import OurHomeMenu from "../../components/OurHomeMenu/OurHomeMenu";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SpecialOffer />
      <AboutHome />
      <OurHomeMenu />
    </>
  );
};

export default Home;

import React from "react";
import Header from "../common/header/Header";
import ImageBox from "../common/ImageBox";
import Collections from "../components/Collections";
import TrendingItems from "../common/TrendingItems";
import Slider from "../Slider/Slider";
import FeaturedProducts from "../Featured Products/FeaturedProducts";
import Testimonials from "../Testimonials/testimonials";
import MainSlider from "../common/MainSlider";
import Footer from "../footer/footer";

import Meta from "../CommonComponents/Meta";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Services from "../common/Services";
import "../index.css";
import {
  faImages,
  faUsers,
  faLock,
  faThumbsUp,
  faComments,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faImages, faUsers, faLock, faThumbsUp, faComments, faGlobe);
const serviceDataHomePage = [
  {
    id: 1,
    icon: "https://img.freepik.com/premium-vector/set-art-supplies-artistic-materials-collection_783634-12.jpg",
    title: "Browse a Vast Collection",
    description:
      "Explore an extensive selection of art pieces, ranging from paintings and sculptures to digital art and photography.",
  },
  {
    id: 2,
    icon: "images/Services/connect-artist.png",
    title: "Connect with Talented Artists",
    description:
      "Engage directly with artists, learn about their inspirations, techniques, and stories behind their artwork.",
  },
  {
    id: 3,
    icon: "images/Services/secure.jpg",
    title: "Secure Transactions",
    description:
      "Experience peace of mind with our secure payment system and buyer protection, ensuring a seamless and risk-free buying process.",
  },
  {
    id: 4,
    icon: "images/Services/curated-art.jpg",
    title: "Curated Collections",
    description:
      "Discover handpicked collections of art curated by our experts, featuring different styles, themes, and emerging artists.",
  },
  {
    id: 5,
    icon: "https://res.cloudinary.com/jerrick/image/upload/v1501035642/ig2mqhsck7wjg1lls0nf.jpg",
    title: "Art Consultation",
    description:
      "Our team of art experts is available to provide personalized recommendations and assistance in selecting artwork for your space.",
  },
  {
    id: 6,
    icon: "images/Services/shipping.jpg",
    title: "Worldwide Shipping",
    description:
      "We offer global shipping options, allowing art lovers from around the world to receive their favorite pieces conveniently.",
  },
];

const Home = () => {
  const collection =
    "https://yourartbox.com/wp-content/uploads/2020/02/art-artwork-daytime-1321552-scaled.jpg";
  return (
    <>
      <Meta title={"Artistan"} />
      <Header />
      <ImageBox imgSource="images/bg3.jpg" />
      <Slider />
      {/*<Collections />*/}
      {/*} <TrendingItems />*/}
      <FeaturedProducts />

      <Services servicesData={serviceDataHomePage} />

      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;

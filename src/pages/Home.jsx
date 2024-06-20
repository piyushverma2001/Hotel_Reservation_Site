import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Banner from "../components/Banner.jsx";
import Services from "../components/Services.jsx";
import FeaturedRooms from "../components/FeaturedRooms.jsx";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;

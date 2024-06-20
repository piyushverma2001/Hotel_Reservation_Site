import React from "react";
import Hero from "../components/Hero.jsx";
import Banner from "../components/Banner.jsx";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer.jsx";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;

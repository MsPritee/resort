import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../Components/RoomsContainer";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title=" rooms">
          <Link to="/" className="btn-primary">
            return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}

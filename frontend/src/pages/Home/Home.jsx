import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import Calendar from "../../components/Calendar";
import "./home.css";
import ListCarModelRandom from "../../components/ListCarModelRandom";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Calendar />
      <ListCarModelRandom />
      <Footer />
    </>
  );
}

export default Home;

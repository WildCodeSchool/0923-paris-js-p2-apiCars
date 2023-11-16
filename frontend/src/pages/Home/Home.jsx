import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import Calendar from "../../components/Calendar";
import ListCarHome from "../../components/ListCarHome";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Calendar />
      <ListCarHome />
      <Footer />
    </>
  );
}

export default Home;

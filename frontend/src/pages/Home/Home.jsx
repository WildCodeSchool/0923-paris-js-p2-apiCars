import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import Calendar from "../../components/Calendar";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Calendar />
      <Footer />
    </>
  );
}

export default Home;

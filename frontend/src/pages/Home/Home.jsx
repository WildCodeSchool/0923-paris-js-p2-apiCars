import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import ListCarHome from "../../components/ListCarHome";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListCarHome />
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import Calendar from "../../components/Calendar";
import ListCarHome from "../../components/ListCarHome";
import Video from "../../components/Video";

function Home() {
  return (
    <>
      <NavBar className="NavBar" />
      <Banner />
      <Calendar />
      <Video />
      <ListCarHome />
      <Footer />
    </>
  );
}

export default Home;

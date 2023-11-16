import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import InscriptionForm from "../../components/InscriptionForm";
import ListCarModelRandom from "../../components/ListCarModelRandom";

function Reservation() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListCarModelRandom />
      <InscriptionForm />
      <Footer />
    </>
  );
}

export default Reservation;

import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import InscriptionForm from "../../components/InscriptionForm";
import Banner from "../../components/Banner";

function Inscription() {
  return (
    <>
      <NavBar />
      <Banner />
      <InscriptionForm />
      <h1 id="pictureBottom"> </h1>
      <Footer />
    </>
  );
}

export default Inscription;

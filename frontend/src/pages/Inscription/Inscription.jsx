import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import InscriptionForm from "../../components/InscriptionForm";
import Banner from "../../components/Banner";

import "./inscription.css";

function Inscription() {
  return (
    <>
      <NavBar />
      <Banner />
      <InscriptionForm />
      <Footer />
    </>
  );
}

export default Inscription;

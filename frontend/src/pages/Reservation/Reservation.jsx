import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Banner2 from "../../components/banner2";
import "./reservation.css";

function Reservation() {
  return (
    <>
      <NavBar />
      <Banner2 />
      <div className="reservation">
        <input type="text" placeholder="NOM :" />
        <input type="text" placeholder="PRENOM :" />
      </div>
      <div className="reservation2">
        <input type="text" placeholder="TELEPHONE :" />
        <input type="text" placeholder="EMAIL :" />
      </div>
      <div className="reservation3">
        <input type="text" placeholder="METHODE DE PAIEMENT :" />
      </div>
      <div className="reservation4">
        <input type="text" placeholder="CODE POSTAL :" />
        <input type="text" placeholder="PAYS :" />
      </div>
      <div className="reservation5">
        <input type="text" placeholder="VILLE :" />
        <input type="text" placeholder="NUMERO DE VOIE :" />
      </div>
      <div className="reservation6">
        <button type="submit">PAYER ET RESERVER</button>
      </div>

      <Footer />
    </>
  );
}

export default Reservation;

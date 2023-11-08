import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h3>Nous contacter</h3>
        <h3>api-car@boitemail.com</h3>
      </div>

      <div className="reseaux">
        <h3>Suivez-nous</h3>
        <img id="picture-social-network" src="" alt="pictogrammes" />
      </div>

      <div className="emploi">
        <h3>Recrutement</h3>
        <h3>Pole-emploi</h3>
      </div>
    </div>
  );
}

export default Footer;

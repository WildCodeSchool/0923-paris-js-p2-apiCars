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
        <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer">
          <img
            id="facebook"
            src="src/assets/photos/facebook.svg"
            alt="pictogrammes"
          />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img
            id="twitter"
            src="src/assets/photos/twitter.svg"
            alt="pictogrammes"
          />
        </a>
        <a href="https://www.google.fr/" target="_blank" rel="noreferrer">
          <img
            id="google"
            src="src/assets/photos/google-plus-g.svg"
            alt="pictogrammes"
          />
        </a>
      </div>
      <div className="emploi">
        <h3>Recrutement</h3>
        <a
          href="https://www.pole-emploi.fr/accueil/"
          target="_blank"
          rel="noreferrer"
        >
          Pole-emploi
        </a>
      </div>
    </div>
  );
}

export default Footer;

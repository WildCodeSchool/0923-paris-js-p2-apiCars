import React, { useState } from "react";
import "./inscriptionform.css";

function Inscription() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === "" || confirmPassword.trim() === "") {
      alert("Veuillez remplir tous les champs de mot de passe.");
    } else if (password === confirmPassword) {
      alert("Mot de passe correct !");
    } else {
      alert("Mot de passe incorrect. Veuillez réessayer.");
    }
  };

  return (
    <fieldset>
      <section className="unscrib">
        <div className="saisie">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nom :"
            required
          />
        </div>

        <div className="saisie">
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Prénom :"
            required
          />
        </div>

        <div className="saisie">
          <input
            type="email"
            id="courriel"
            name="courriel"
            placeholder="Mail : dupont@boitemail.fr"
            required
          />
        </div>
      </section>

      <section className="unscrib">
        <div className="saisie">
          <input
            type="text"
            id="tel"
            name="tel"
            placeholder="Téléphone :"
            required
          />
        </div>

        <div className="saisie">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe :"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="saisie">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmer mot de passe :"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </section>

      <div className="button">
        <button type="submit" onClick={handleSubmit}>
          S'INSCRIRE
        </button>
      </div>
    </fieldset>
  );
}

export default Inscription;

import React, { useState } from "react";

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
      <h2 id="inscription">Inscription</h2>
      <div className="">
        <label htmlFor="username">Nom :</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nom"
          required
        />
      </div>

      <label htmlFor="surname">Prénom :</label>
      <input
        type="text"
        id="surname"
        name="surname"
        placeholder="Prénom"
        required
      />

      <label htmlFor="courriel">Email :</label>
      <input
        type="email"
        id="courriel"
        name="courriel"
        placeholder="dupont@boitemail.fr"
        required
      />

      <label htmlFor="tel">Tél :</label>
      <input type="text" id="tel" name="tel" required />

      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />

      <div className="button">
        <button type="submit" onClick={handleSubmit}>
          S'INSCRIRE
        </button>
      </div>
    </fieldset>
  );
}

export default Inscription;

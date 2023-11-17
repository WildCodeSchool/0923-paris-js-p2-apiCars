/* eslint-disable no-alert */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./compLog.css";

function CompLog() {
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === "" || email.trim() === "") {
      alert("Veuillez remplir tous les champs .");
    } else if (password === "apicar" && email === "apicar@gmail.com") {
      navigate("/");
    } else {
      alert("utilisateur non reconnue.");
    }
  };

  return (
    <div className="papa">
      <div className="saisie">
        <input
          className="a"
          type="email"
          id="courriel"
          name="courriel"
          placeholder="Mail : dupont@boitemail.fr"
          value={email}
          onChange={handleemail}
        />
      </div>

      <div className="saisie">
        <input
          className="a"
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe :"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className="boubou" type="button" onClick={handleSubmit}>
        se connecter
      </button>
    </div>
  );
}

export default CompLog;

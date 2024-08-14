import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "./searchbar.css";

function SearchBar() {
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="calendar">
      <div className="lieu">
        <p id="li">Lieu de retrait :</p>
      </div>

      <div className="depart">
        {showCalendar && <Calendar />}
        <button
          className="searchBarButton"
          type="button"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <p id="startCalendar">Depart :</p> :
        </button>
      </div>
      <div className="retour">
        {showCalendar && <Calendar />}
        <button
          className="searchBarButton"
          type="button"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <p id="backCalendar">Retour :</p>
        </button>
      </div>

      <div className="recherche">
        <button
          id="rech"
          type="button"
          onClick={() => navigate("/ListCategory")}
        >
          Rechercher
        </button>
      </div>
    </section>
  );
}

export default SearchBar;

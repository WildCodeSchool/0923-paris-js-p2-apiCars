import { useNavigate } from "react-router-dom";
import "./calendar.css";

function Calendar() {
  const navigate = useNavigate();
  return (
    <section className="calendar">
      <div className="lieu">
        <p id="li">Lieu de retrait :</p>
      </div>
      <div className="depart">
        <p id="dep">Depart :</p>
      </div>
      <div className="retour">
        <p id="ret">Retour :</p>
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

export default Calendar;

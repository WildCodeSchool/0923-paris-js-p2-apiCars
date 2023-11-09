import "./calendar.css";

function Calendar() {
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
        <p id="rech">Rechercher</p>
      </div>
    </section>
  );
}

export default Calendar;

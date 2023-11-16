import { useHistory } from "react-router-dom";
import "./boutton.css";

function Boutton() {
  const history = useHistory();

  const handleClic = () => {
    history.push("/reservation");
  };

  return (
    <div>
      <button type="submit" onClick={handleClic}>
        Reservez
      </button>
    </div>
  );
}

export default Boutton;

import "./componentcard.css";
import { useNavigate, useLocation } from "react-router-dom";

function ComponentCard(props) {
  const { car, image } = props;
  const navigate = useNavigate();
  const location = useLocation();
  let content;

  if (location.pathname === "/") {
    content = (
      <button
        className="componentCardButton"
        type="button"
        onClick={() => navigate(`/ListCategory?make=${car.make}`)}
      >
        <p className="description">{car.make}</p>
      </button>
    );
  } else if (location.pathname === "/ListCategory") {
    content = (
      <button
        className="componentCardButton"
        type="button"
        onClick={() => navigate(`/CarPage?model=${car.model}`)}
      >
        <p className="description">{car.model}</p>
      </button>
    );
  }
  return (
    <div className="propsVoiture">
      {image}
      {content}
    </div>
  );
}

export default ComponentCard;

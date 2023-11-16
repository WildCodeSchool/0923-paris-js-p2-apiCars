import "./componentcard.css";
import { useNavigate, useLocation } from "react-router-dom";

function ComponentCard(props) {
  const { car, imageRandom } = props;
  const navigate = useNavigate();
  const location = useLocation();
  let content;

  if (location.pathname === "/Home") {
    content = (
      <button
        type="button"
        className="button"
        onClick={() => navigate(`/ListCategory?make=${car.make}`)}
      >
        <p className="description">{car.make}</p>
      </button>
    );
  } else if (location.pathname === "/ListCategory") {
    content = (
      <button
        type="button"
        onClick={() => navigate(`/CarPage?model=${car.model}`)}
      >
        <p className="description">{car.model}</p>
      </button>
    );
  }
  return (
    <div className="car">
      <div className="propsVoiture">
        <div>
          {imageRandom}
          {content}
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;

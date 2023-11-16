import "./componentcard.css";
import { useLocation } from "react-router-dom";

function ComponentCard(props) {
  const { car, imageRandom } = props;
  const location = useLocation();
  let content;
  if (location.pathname === "/Home") {
    content = (
      <div>
        <p className="description">{car.make}</p>
      </div>
    );
  } else if (location.pathname === "/ListCategory") {
    content = (
      <div>
        <p className="description">
          {car.model} | {car.fuel_type}
        </p>
      </div>
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

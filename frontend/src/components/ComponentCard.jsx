import "./componentcard.css";

function ComponentCard(props) {
  const { car, imageRandom } = props;
  return (
    <div className="car">
      <div className="propsVoiture">
        <div className="image">{imageRandom}</div>
        <p className="description">
          {car.make} | {car.model} | {car.fuel_type}
        </p>
      </div>
    </div>
  );
}

export default ComponentCard;

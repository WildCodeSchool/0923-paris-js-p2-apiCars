import "./componentcard.css";

function ComponentCard(props) {
  const { car, imageRandom } = props;
  return (
    <div className="car">
      <div className="propsVoiture">
        {car.make} | {car.model} | {car.fuel_type}
        <div>{imageRandom}</div>
      </div>
    </div>
  );
}

export default ComponentCard;

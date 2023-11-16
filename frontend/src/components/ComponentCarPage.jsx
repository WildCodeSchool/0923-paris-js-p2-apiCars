import "./componentcarpage.css";

function ComponentCarPage(props) {
  const { car, imageRandom } = props;
  return (
    <div className="car">
      <div className="propsVoiture">
        <div>{imageRandom}</div>
        <p className="description">
          {car.make} | {car.model} | {car.fuel_type}
        </p>
      </div>
    </div>
  );
}

export default ComponentCarPage;

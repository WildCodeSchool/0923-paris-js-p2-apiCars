function CarCard(props) {
  const { car, make } = props;

  return (
    <div>
      <p>{car}</p>
      <p>{make}</p>
    </div>
  );
}

export default CarCard;

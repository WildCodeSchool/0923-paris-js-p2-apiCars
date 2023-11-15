import "./banner2.css";

function Banner(props) {
  const { description } = props;
  return (
    <div className="banner">
      <div className="text">
        <p>{description} RESERVATION</p>
      </div>
    </div>
  );
}

export default Banner;

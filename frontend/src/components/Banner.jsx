import "./banner.css";

function Banner(props) {
  const { description } = props;
  return (
    <div className="banner">
      <img src=".\src\assets\photos\Audi.jpg" alt="Audi" />
      <p>{description}</p>
    </div>
  );
}

export default Banner;

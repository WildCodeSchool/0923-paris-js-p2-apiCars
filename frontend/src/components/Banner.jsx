import "./banner.css";

function Banner(props) {
  const { description } = props;
  return (
    <div className="banner">
      <div className="text">
        <p>
          {description}Chez API-CAR la mobilité nous tient a coeur, aujourd’hui
          vous pouvez louer des voitures de toute categorie au meilleur prix
          c’est ça la magie API-CAR !!! API-CAR! BE API !!!
        </p>
      </div>
    </div>
  );
}

export default Banner;

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ComponentCard from "./ComponentCard";

function ListCarModelRandom() {
  const [params] = useSearchParams();
  const [cars, setCars] = useState([]);
  const make = params.get("make");

  const imageRandom = () => {
    const tab = [
      <img
        src="src/assets/photos/mercedesBenz.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/Peugeot.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/RenaultClio4.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/Skoda.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/Volvo.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/carelec.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/Mazda6.png"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/utilitaire.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/VWCocci.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/utilitaire2.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/ToyotaYaris.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/ToyotaRav.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/lagunaCoupe.jpeg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/Audi.jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/images(4).jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
      <img
        src="src/assets/photos/images (3).jpg"
        alt="Mercedes Benz"
        className="arrayimg"
      />,
    ];
    const randomIndex = Math.floor(Math.random() * tab.length);
    return tab[randomIndex];
  };
  useEffect(() => {
    const url = make
      ? `https://api.api-ninjas.com/v1/cars?make=${make}&limit=9`
      : "https://api.api-ninjas.com/v1/cars?make=a&limit=9";
    fetch(url, {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="car-container">
      {cars.map((car) => {
        return (
          <div className="carte" key={`${car.make}-${car.model}-${car.year}`}>
            <ComponentCard car={car} imageRandom={imageRandom()} />
          </div>
        );
      })}
    </div>
  );
}

export default ListCarModelRandom;

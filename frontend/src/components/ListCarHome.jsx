import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ComponentCard from "./ComponentCard";
import mercedezImage from "../assets/photos/mercedesBenz.jpg";
import peugeotImage from "../assets/photos/Peugeot.jpg";
import renaultImage from "../assets/photos/utilitaire.jpg";
import skodaImage from "../assets/photos/Skoda.jpg";
import volvoImage from "../assets/photos/Volvo.jpg";
import mazdaImage from "../assets/photos/Mazda6.png";
import volkswagenImage from "../assets/photos/VWCocci.jpg";
import toyotaImage from "../assets/photos/ToyotaYaris.jpg";

const imageMap = {
  mercedezImage,
  peugeotImage,
  renaultImage,
  skodaImage,
  volvoImage,
  mazdaImage,
  volkswagenImage,
  toyotaImage,
  "generic image": "src/assets/photos/defaultCar.jpg",
};

// Fonction pour normaliser la clé de la marque
const normalizeMake = (make) => make.toLowerCase();

function ListCarModelRandom() {
  const [params] = useSearchParams();
  const [uniqueMakes, setUniqueMakes] = useState([]);
  const make = params.get("make");

  useEffect(() => {
    const url = make
      ? `https://api.api-ninjas.com/v1/cars?make=${make}&limit=30`
      : "https://api.api-ninjas.com/v1/cars?make=a&limit=30";
    fetch(url, {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => {
        const uniqueMakesList = data.reduce((acc, car) => {
          const normalizedMake = normalizeMake(car.make);
          if (!acc.some((unique) => unique.make === car.make)) {
            acc.push({
              ...car,
              image: imageMap[normalizedMake] || imageMap["generic image"],
            });
          }
          return acc;
        }, []);

        setUniqueMakes(uniqueMakesList.slice(0, 9));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [make]);
  return (
    <div className="car-container">
      {uniqueMakes.map((car) => (
        <div className="carte" key={`${car.make}-${car.model}-${car.year}`}>
          <ComponentCard car={car} image={car.image} />
        </div>
      ))}
    </div>
  );
}

export default ListCarModelRandom;

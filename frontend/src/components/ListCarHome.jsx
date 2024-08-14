import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ComponentCard from "./ComponentCard";
import mercedez from "../assets/photos/mercedesBenz.jpg";
import peugeot from "../assets/photos/Peugeot.jpg";
import renault from "../assets/photos/utilitaire.jpg";
import skoda from "../assets/photos/Skoda.jpg";
import volvo from "../assets/photos/Volvo.jpg";
import mazda from "../assets/photos/Mazda6.png";
import volkswagen from "../assets/photos/VWCocci.jpg";
import toyota from "../assets/photos/ToyotaYaris.jpg";
import ferrari from "../assets/photos/ferrari.jpg";
import subaru from "../assets/photos/subaru.jpg";
import audi from "../assets/photos/Audi.jpg";
import cadillac from "../assets/photos/cadillac.jpg";
import nissan from "../assets/photos/nissan.jpg";
import hyundai from "../assets/photos/hyundai.jpg";
import alfaRomeo from "../assets/photos/laguna.jpeg";
import xcAutomotive from "../assets/photos/carelec.jpg";

const imageMap = {
  alfaRomeo,
  xcAutomotive,
  ferrari,
  subaru,
  audi,
  cadillac,
  nissan,
  hyundai,
  mercedez,
  peugeot,
  renault,
  skoda,
  volvo,
  mazda,
  volkswagen,
  toyota,
  "generic image": "src/assets/photos/defaultCar.jpg",
};

// Fonction pour normaliser la clé de la marque

const normalizeMake = (make) => {
  return make.toLowerCase().replace(/\s+/g, " ").trim();
};
console.info(normalizeMake);
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
          const normalizedMake = car.make
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim();
          console.info("Normalized Make:", normalizedMake); // Débogage
          const image = imageMap[normalizedMake] || imageMap["generic image"];
          if (!acc.some((unique) => unique.make === car.make)) {
            acc.push({
              ...car,
              image,
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

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ComponentCard from "./ComponentCard";

// Dictionnaire pour associer les marques de voitures à des images
const imageMap = {
  "Mercedes Benz": "src/assets/photos/mercedesBenz.jpg",
  Peugeot: "src/assets/photos/Peugeot.jpg",
  Renault: "src/assets/photos/renaultClio4.jpg",
  Skoda: "src/assets/photos/Skoda.jpg",
  Volvo: "src/assets/photos/Volvo.jpg",
  Mazda: "src/assets/photos/Mazda6.png",
  Volkswagen: "src/assets/photos/VWCocci.jpg",
  Toyota: "src/assets/photos/ToyotaYaris.jpg",
  "Generic Image": "src/assets/photos/defaultCar.jpg", // Image par défaut pour les marques non spécifiées
};

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
          if (!acc.some((unique) => unique.make === car.make)) {
            acc.push({
              ...car,
              image: imageMap[car.make] || imageMap["Generic Image"],
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

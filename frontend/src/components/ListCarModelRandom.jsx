import { useState, useEffect } from "react";
import CarCard from "./CarCard";

function ListCarModelRandom() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/cars?make=audi&limit=50", {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      {cars.map((car) => {
        return (
          <div>
            <CarCard car={car} make={car.make} />
          </div>
        );
      })}
    </div>
  );
}

export default ListCarModelRandom;

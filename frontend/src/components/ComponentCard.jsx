import React, { useState, useEffect } from "react";

function ComponentCard() {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/cars?make=mercedes&limit=1", {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => setMakes(data));
  }, []);

  return (
    <div>
      {makes.map((car) => (
        <div key={car.model}>
          {car.make} | {car.model} | {car.fuel_type}
          <img src="src/assets/mercedesBenz.jpg" alt="Mercedes Benz" />
        </div>
      ))}
    </div>
  );
}

export default ComponentCard;

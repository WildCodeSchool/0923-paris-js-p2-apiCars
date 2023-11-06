import React, { useState, useEffect } from "react";

function ComponentCard() {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/cars?make=mercedes&limit=6", {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => setMakes(data));
  }, []);

  return (
    <div>
      <ul>
        {makes.map((car) => (
          <li key={car}>
            {car.make} | {car.model} | {car.fuel_type}
            <div>
              <img src="src/assets/mercedesBenz.jpg" alt="Mercedes Benz" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComponentCard;

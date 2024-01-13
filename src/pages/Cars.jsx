import React, { useEffect, useState } from "react";
import "../styles/bookings.css";
import axios from "axios";

import CarItem from "../components/UI/CarItem.jsx";

const Cars = () => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/get-cars").then((res) => {
      setCarData(res.data.data);
    });
  }, []);

  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Cars</h2>

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem isAdmin={false} item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;

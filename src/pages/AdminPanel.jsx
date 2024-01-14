import React, { useEffect, useState } from "react";
import "../styles/bookings.css";
import CarItem from "../components/UI/CarItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPanel = () => {
  const navigate = useNavigate();

  const navigateToAddCar = () => {
    navigate("/add-car");
  };

  const [carData, setCarData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = axios
      .get("http://localhost:8000/api/get-cars")
      .then((res) => {
        setCarData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDeleteCar = (id) => {
    axios
      .delete("http://localhost:8000/api/delete-car/" + id)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">List Of Cars</h2>
        <button onClick={navigateToAddCar} type="button" class="btn btn-dark">
          Add Car
        </button>

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem
              handleDeleteCar={handleDeleteCar}
              isAdmin={true}
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

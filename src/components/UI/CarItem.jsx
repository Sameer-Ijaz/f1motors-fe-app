import React from "react";
import { useNavigate } from "react-router";

const CarItem = (props) => {
  const { price, companyName, modelName, year, image, _id } = props.item;
  const isAdmin = props.isAdmin;
  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate("/add-car", {
      state: {
        price,
        companyName,
        modelName,
        year,
        image,
        _id,
      },
    });
  };

  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{companyName}</h3>
          <span>
            <i class="ri-heart-line"></i>
          </span>
        </div>
        <p>{modelName}</p>
      </div>

      <div className="car__img">
        <img
          className="car-img"
          src={"http://localhost:8000/api/postImages/" + image}
          alt=""
        />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {year}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            Auto
          </p>
        </div>

        <p className="car__rent">{price} AED</p>
      </div>
      {isAdmin && (
        <div>
          <button onClick={navigateToEdit} type="button" class="btn btn-light">
            Edit
          </button>
          <button
            onClick={() => {
              props.handleDeleteCar(_id);
            }}
            type="button"
            class="btn btn-dark"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CarItem;

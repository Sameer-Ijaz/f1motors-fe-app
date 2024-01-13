import React, { useEffect, useState } from "react";
import "../styles/settings.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const AddCar = () => {
  const [companyName, setCompanyName] = useState();
  const [modelName, setModelName] = useState();
  const [year, setYear] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    const { state } = location;
    console.log(state);
    if (state) {
      // Access the data passed through navigate
      setCompanyName(state.companyName || "");
      setModelName(state.modelName || "");
      setYear(state.year || "");
      setPrice(state.price || "");
      setImage(state.image || null);
      setEdit(true);
      setId(state._id);
      // _id might be useful if you're in edit mode, but make sure it's handled appropriately
    }
  }, [location]);

  const handleAddCar = async () => {
    // Create a FormData object
    const formData = new FormData();

    // Append the file to the FormData object
    formData.append("image", image);

    // Append other form data
    formData.append("companyName", companyName);
    formData.append("modelName", modelName);
    formData.append("year", year);
    formData.append("price", price);

    // Make the POST request with the FormData object
    try {
      const response = await axios.post(
        "http://localhost:8000/api/add-car",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEditCar = async () => {
    // Create a FormData object
    const formData = new FormData();

    // Append the file to the FormData object
    formData.append("image", image);
    formData.append("id", id);

    // Append other form data
    formData.append("companyName", companyName);
    formData.append("modelName", modelName);
    formData.append("year", year);
    formData.append("price", price);

    // Make the POST request with the FormData object
    try {
      const response = await axios.put(
        "http://localhost:8000/api/update-car",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleModelChange = (event) => {
    setModelName(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Add New Car</h2>
          <p className="profile__desc">Add all the details about the car</p>
          <form>
            <div className="form__group">
              <div>
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Toyota"
                  value={companyName} // Bind the input value to the state
                  onChange={handleCompanyNameChange} // Set the event handler for input changes
                />
              </div>

              <div>
                <label>Modal Name</label>
                <input
                  type="text"
                  placeholder="Camry"
                  value={modelName} // Bind the input value to the state
                  onChange={handleModelChange} // Set the event handler for input changes
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Year</label>
                <input
                  type="text"
                  placeholder="2002"
                  value={year} // Bind the input value to the state
                  onChange={handleYearChange} // Set the event handler for input changes
                />
              </div>

              <div>
                <label>Price</label>
                <input
                  type="text"
                  placeholder="17 Million AED"
                  value={price} // Bind the input value to the state
                  onChange={handlePriceChange} // Set the event handler for input changes
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Car Image</label>
                <p className="profile-img__desc">
                  This will be displayed in the car listing
                </p>
                <input
                  onChange={handleImageChange}
                  type="file"
                  placeholder="choose file"
                />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
        <button
          onClick={() => {
            if (edit) {
              handleEditCar();
            } else {
              handleAddCar();
            }
          }}
          type="button"
          class="btn btn-dark"
        >
          {edit ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddCar;

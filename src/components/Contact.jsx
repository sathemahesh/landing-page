import React, { useState } from "react";
import back from "../assets/back.jpg";
import validator from "validator";
import "../styling/Contactstyle.css";

function Contact() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [DateValue, setDateValue] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [dateError, setDateError] = useState("");

  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [Gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Enter a valid Email!");
      return false;
    }
  };

  const validatePassword = (password) => {
    if (password.length >= 6) {
      setPasswordError("");
      return true;
    } else {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword === Password) {
      setConfirmPasswordError("");
      return true;
    } else {
      setConfirmPasswordError("Passwords do not match!");
      return false;
    }
  };
  const validatePhone = (phone) => {
    // Check if phone number starts with a valid country code (e.g., +1 to +999)
    // and is followed by 7 to 14 digits
    const phonePattern = /^\+(?:[1-9][0-9]{0,2})[0-9]{7,14}$/;

    if (phonePattern.test(phone)) {
      setPhoneError("");
      return true;
    } else {
      setPhoneError(
        "Enter a valid phone number with a valid country code (e.g., +91, +44, +123)!"
      );
      return false;
    }
  };

  const validateAddress = (address) => {
    if (address.trim().length >= 5) {
      setAddressError("");
      return true;
    } else {
      setAddressError("Address must be at least 5 characters");
      return false;
    }
  };

  const validateDate = (date) => {
    if (date.length === 10) {
      if (
        validator.isDate(date, {
          format: "YYYY-MM-DD",
          strictMode: true,
        })
      ) {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        console.log({ selectedDate, today });

        if (selectedDate < today) {
          setDateError("Please select today's date or a future date.");
          return false;
        } else {
          setDateError("");
          return true;
        }
      } else {
        setDateError("Enter a valid date! Use format YYYY-MM-DD.");
        return false;
      }
    } else {
      setDateError("Date must be in YYYY-MM-DD format.");
      return false;
    }
  };

  const validateGender = (gender) => {
    if (gender) {
      setGenderError("");
      return true;
    } else {
      setGenderError("Please select your gender!");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(Email);
    const isPasswordValid = validatePassword(Password);

    const isConfirmPasswordValid = validateConfirmPassword(ConfirmPassword);
    const isPhoneValid = validatePhone(Phone);
    const isAddressValid = validateAddress(Address);
    const isDateValid = validateDate(DateValue);

    const isGenderValid = validateGender(Gender);

    if (
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isPhoneValid &&
      isAddressValid &&
      isGenderValid
    ) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  const colStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "20px",
  };

  return (
    <div className="main_container">
      <div className="row">
        <div className="col" style={colStyle}>
          <h5 className="h5-style1">Evntiz</h5>
          <h1 className="h1-style1"> Contact Us </h1>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <h4 className="text-start ms-0">
            ! Fill the Details to Connect Us !
          </h4>
        </div>
      </div>

      <div className="row mt-5 d-flex   ">
        <div className="col-12 d-flex justify-content-center ">
          <form
            className="w-50"
            onSubmit={handleSubmit}
            style={{ maxWidth: "590px" }}
          >
            <div className="mb-3 row ">
              <label className="col-sm-4 col-form-label text-start fild_name w-100">
                Email address:
              </label>
              <div className="col-sm-8   w-100">
                <input
                  type="email"
                  className="w-100 input_box "
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                />
                <small className="text-danger text-start d-block">
                  {emailError}
                </small>
              </div>
            </div>

            <div className="mb-3 row  d-flex ">
              <label className="col-sm-4 col-form-label text-start fild_name  w-100">
                Password:
              </label>
              <div className="col-sm-8 me-3 w-100">
                <input
                  type="password"
                  className=" w-100 input_box "
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                />
                <small className="text-danger text-start d-block">
                  {passwordError}
                </small>
              </div>
            </div>

            <div className="mb-3 row  d-flex ">
              <label className="col-sm-4 col-form-label text-start fild_name w-100">
                Confirm Password:
              </label>
              <div className="col-sm-8 me-3 w-100">
                <input
                  type="password"
                  className=" w-100 input_box"
                  value={ConfirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateConfirmPassword(e.target.value);
                  }}
                />
                <small className="text-danger text-start d-block">
                  {confirmPasswordError}
                </small>
              </div>
            </div>

            <div className="mb-3 row  d-flex ">
              <label className="col-sm-4 col-form-label text-start fild_name  w-100">
                Phone Number:
              </label>
              <div className="col-sm-8 me-3 w-100">
                <input
                  type="text"
                  className="w-100 input_box"
                  value={Phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    validatePhone(e.target.value);
                  }}
                />
                <small className="text-danger text-start  d-block ">
                  {phoneError}
                </small>
              </div>
            </div>

            <div className="mb-3 row d-flex ">
              <label className="col-sm-4 col-form-label text-start fild_name  w-100">
                Address:
              </label>
              <div className="col-sm-8 me-3 w-100">
                <input
                  type="text"
                  className="w-100 input_box"
                  value={Address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    validateAddress(e.target.value);
                  }}
                />
                <small className="text-danger  text-start  d-block ">
                  {addressError}
                </small>
              </div>
            </div>

            <div className="mb-3 row  d-flex ">
              <label className="col-sm-4 col-form-label text-start fild_name  w-100">
                Date:
              </label>
              <div className="col-sm-8 me-3 w-100">
                <input
                  type="date"
                  className=" w-100 input_box"
                  value={DateValue}
                  onChange={(e) => {
                    setDateValue(e.target.value);
                    validateDate(e.target.value);
                  }}
                />
                <small className="text-danger text-start  d-block ">
                  {dateError}
                </small>
              </div>
            </div>

            <div className="mb-3 row align-items-center">
              <label className="col-sm-4 col-form-label text-start fild_name">
                Gender:
              </label>
              <div className="col-sm-8 d-flex align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="Male"
                    value="Male"
                    checked={Gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="Male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="Female"
                    value="Female"
                    checked={Gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="Female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    id="other"
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={Gender === "Other"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mb-5">
              <button type="submit" className="btn nir-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

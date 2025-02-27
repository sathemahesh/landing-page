import React, { useState } from 'react';
import back from '../assets/back.jpg';
import validator from 'validator';
import '../styling/Contactstyle.css';

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

    const validatePhone = (phone) => {
        if (validator.isMobilePhone(phone, 'any')) {
            setPhoneError("");
            return true;
        } else {
            setPhoneError("Enter a valid phone number!");
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
                    strictMode: true
                })
            ) {
                const selectedDate = new Date(date);
                const today = new Date();
                today.setHours(0, 0, 0, 0); 
                selectedDate.setHours(0,0, 0,0)

                console.log({ selectedDate, today})

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


    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail(Email);
        const isPasswordValid = validatePassword(Password);
        const isPhoneValid = validatePhone(Phone);
        const isAddressValid = validateAddress(Address);
        const isDateValid = validateDate(DateValue);

        if (isEmailValid && isPasswordValid && isPhoneValid && isAddressValid && isDateValid) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fill all fields correctly.");
        }
    };

    const colStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
    };

    return (
        <div className="main_container">
            <div className="row">
                <div className="col" style={colStyle}>
                    <h5 className='h5-style1'>Evntiz</h5>
                    <h1 className='h1-style1'> Contact Us </h1>
                </div>
            </div>

            <div className="row">
                <div className="col d-flex justify-content-center">
                    <h4 className="text-start ms-0">! Fill the Details to Connect Us !</h4>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    <form className="w-50" onSubmit={handleSubmit}>

                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label text-start fild_name">Email address:</label>
                            <div className="col-sm-8 me-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    value={Email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                />
                                <small className="text-danger text-start d-block">{emailError}</small>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label text-start fild_name">Password:</label>
                            <div className="col-sm-8 me-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={Password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword(e.target.value);
                                    }}
                                />
                                <small className="text-danger text-start d-block">{passwordError}</small>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label text-start fild_name">Phone Number:</label>
                            <div className="col-sm-8 me-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={Phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        validatePhone(e.target.value);
                                    }}
                                />
                                <small className="text-danger  text-start  d-block ">{phoneError}</small>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label text-start fild_name">Address:</label>
                            <div className="col-sm-8 me-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={Address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                        validateAddress(e.target.value);
                                    }}
                                />
                                <small className="text-danger  text-start  d-block ">{addressError}</small>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label text-start fild_name">Date:</label>
                            <div className="col-sm-8 me-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={DateValue}
                                    onChange={(e) => {
                                        setDateValue(e.target.value);
                                        validateDate(e.target.value);
                                    }}
                                />
                                <small className="text-danger text-start  d-block ">{dateError}</small>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start">
                            <button type="submit" className="btn nir-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

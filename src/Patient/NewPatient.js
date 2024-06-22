import React, { useState } from "react";
import axios from "axios";

const NewPatient = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    insurance: "",
    departmentid: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDate = (date) => {
    const dateParts = date.split("-");
    return `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`; // Converts 'YYYY-MM-DD' to 'MM/DD/YYYY'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      dob: formatDate(formData.dob), // Format the date before sending
    };

    try {
      const response = await axios.post(
        "http://localhost:5007/register",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Registration successful");
    } catch (error) {
      console.error(error);
      alert(
        "Registration failed: " +
          (error.response
            ? JSON.stringify(error.response.data)
            : "Unknown error")
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstname"
        placeholder="First Name"
        value={formData.firstname}
        onChange={handleChange}
        required
      />
      <input
        name="lastname"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <input
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
        required
      />
      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="insurance"
        placeholder="Insurance Details"
        value={formData.insurance}
        onChange={handleChange}
      />
      <input
        name="departmentid"
        placeholder="Department ID"
        value={formData.departmentid}
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default NewPatient;

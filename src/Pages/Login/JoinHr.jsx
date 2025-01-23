import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JoinHr = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    companyLogo: "",
    package: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        ...formData,
        role: "hr",
      });
      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
      />
      {/* Other form fields... */}
      <button type="submit" className="btn btn-primary w-full">
        Signup
      </button>
    </form>
  );
};

export default JoinHr;

"use client";
import Link from "next/link";
import React, { useState } from "react";

const API_ROOT = 'https://app-node.talkfintech.com:3016';

const Contact = () => {
  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    opt_in: false,
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initialFormData });
    setValidated(false);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      if (form.checkValidity() === false) {
        e.stopPropagation();
        setValidated(true);
      } else {
        setLoading(true);

        const response = await fetch(`${API_ROOT}/api/contact/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Data successfully submitted to the API.");
          setSuccessMessage("Thank you for your message. It has been sent.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 8000);
          resetForm();
        } else {
          console.error("Failed to submit data to the API.");
        }
      }
    } catch (error) {
      console.error("Error while submitting data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mb-5">
      <h5 className="font-bold border-b">Opt-Out Form</h5>
      <div className="col-md-5 mx-auto mt-4 mb-4">
        <h3 className="font-bold text-pink-500 text-center">
          Do Not Sell My Information
        </h3>
        <form
          noValidate
          className="border p-4 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name *"
              className={`mt-3 w-full p-2 border ${validated && !formData.first_name ? "border-red-500" : "border-gray-300"} rounded`}
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
            {validated && !formData.first_name && (
              <p className="text-red-500">Please provide a valid first name.</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name *"
              className={`mt-3 w-full p-2 border ${validated && !formData.last_name ? "border-red-500" : "border-gray-300"} rounded`}
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
            {validated && !formData.last_name && (
              <p className="text-red-500">Please provide a valid last name.</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="name@example.com *"
              className={`mt-3 w-full p-2 border ${validated && !formData.email ? "border-red-500" : "border-gray-300"} rounded`}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {validated && !formData.email && (
              <p className="text-red-500">Please provide a valid email.</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number *"
              className={`mt-3 w-full p-2 border ${validated && !formData.phone ? "border-red-500" : "border-gray-300"} rounded`}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {validated && !formData.phone && (
              <p className="text-red-500">Please provide a valid phone number.</p>
            )}
          </div>

          <div className="mb-4">
            <textarea
              rows={5}
              placeholder="Message"
              className="mt-3 w-full p-2 border border-gray-300 rounded"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                name="opt_in"
                checked={formData.opt_in}
                onChange={handleInputChange}
                required
              />
              By checking this box, I agree that TalkFintech can contact me by email or phone and provide more information about the services. *
            </label>
          </div>

          <button
            type="submit"
            className={`mt-2 mb-3 p-2 w-72 ml-6 text-white bg-blue-500 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
       
          >
      Submit
          </button>
       

          <button
            type="submit"
            className={`mt-2 mb-3 p-2 w-72  ml-6 text-white bg-green-500 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
   
          >
            <Link href="/">
            
            HomePage
            </Link>
    
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

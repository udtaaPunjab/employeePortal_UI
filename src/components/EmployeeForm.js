import axios from "axios";
import React, { useState } from "react";
import base_url from "../base_url";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

function EmployeeForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const email = event.target[2].value;

    // To see if any field is empty
    if (!firstName || !lastName || !email) {
      toast.error("Please fill in all required fields.", {
        position: "bottom-left", // Set the position of the toast
        autoClose: 2000, // Set the auto-close duration in milliseconds (3 seconds in this case)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the auto-close timer when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // Customize the progress bar color and animation
      });
      return; // Stop form submission if any required field is empty
    }

    // To validate the email
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "bottom-left", // Set the position of the toast
        autoClose: 2000, // Set the auto-close duration in milliseconds (3 seconds in this case)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the auto-close timer when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // Customize the progress bar color and animation
      });
      return;
    }
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    axios.post(`${base_url}/employees/add`, body).then(
      (response) => {
        // To reset the value after submitting the form
        setFirstName("");
        setLastName("");
        setEmail("");
        setTimeout(() => {
          navigate("/view");
          console.log("hi");
        }, 2000);
        toast.success(`Employee ${firstName} added successfully.`, {
          position: "bottom-left", // Set the position of the toast
          autoClose: 2000, // Set the auto-close duration in milliseconds (3 seconds in this case)
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the auto-close timer when hovered
          draggable: true, // Allow dragging the toast
          progress: undefined, // Customize the progress bar color and animation
        });
      },
      (error) => {
        toast.error(`Employee not added`, {
          position: "bottom-left", // Set the position of the toast
          autoClose: 2000, // Set the auto-close duration in milliseconds (3 seconds in this case)
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the auto-close timer when hovered
          draggable: true, // Allow dragging the toast
          progress: undefined, // Customize the progress bar color and animation
        });
      }
    );

    console.log("Submitted:", { firstName, lastName, email });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            style={{ width: "50%", margin: "0 auto" }}
            id="exampleInputFirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputLastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputLastName"
            style={{ width: "50%", margin: "0 auto" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            style={{ width: "50%", margin: "0 auto" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default EmployeeForm;

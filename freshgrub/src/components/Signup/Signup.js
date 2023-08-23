import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../services/userService";
import { toast } from "react-toastify";
import { FormFeedback } from "reactstrap";
import styles from "../../pages/body.module.css";
import { useNavigate } from 'react-router-dom';
import CustomNavbar from "../../components/CustomNavbar";


function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    role: "", // Will hold either 'user' or 'admin' or 'vendor'
    adminId: "",
    vendorId: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (error.isError) {
    //   toast.error("Form Data is Invalid!");
    //   setError({...error,isError:false})
    //   return;
    // }

    if (formData.role === "vendor" && formData.vendorId.length === 0) {
      toast.error("Please provide Vendor ID.");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("minimum 8 characters required");
      return;
    }

    console.log(formData);

    //call to server
    signUp(formData)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        if(resp==="Registered Successfully!")      
        {navigate('/login');} 
        else if(resp==="Email already registered!")
        {toast.error("Email already registered!")}
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        //handling errors
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <div>
                <CustomNavbar />

    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary" class={styles.imagelog}>
      <div className="form_container p-5 rounded bg-white mx-auto">
        <form className="form_control" onSubmit={handleSubmit}>
          <h3 className="text-center"> Sign up</h3>

          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter First name"
              className="form-control"
              name="firstName"
              id="fname"
              pattern="[A-Za-z ]+"
              required
              value={formData.firstName}
              onChange={handleChange}
              invalid={
                error.errors?.response?.formData?.firstName ? true : false
              }
            />
            {/* tomention what is the error */}
            <FormFeedback>
              {error.errors?.response?.formData?.firstName}
            </FormFeedback>
          </div>

          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="form-control"
              name="lastName"
              id="lname"
              value={formData.lastName}
              onChange={handleChange}
              invalid={
                error.errors?.response?.formData?.lastName ? true : false
              }
            />
            <FormFeedback>
              {error.errors?.response?.formData?.lastName}
            </FormFeedback>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              name="email"
              id="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
              value={formData.email}
              onChange={handleChange}
              invalid={error.errors?.response?.formData?.email ? true : false}
            />
            <FormFeedback>
              {error.errors?.response?.formData?.email}
            </FormFeedback>
          </div>

          <div className="mb-2">
            <label htmlFor="mobileNumber">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="form-control"
              name="mobileNumber"
              id="mobileNumber"
              pattern="[0-9]{10}"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
              invalid={error.errors?.response?.formData?.mobileNumber ? true : false}
            />
            <FormFeedback>
              {error.errors?.response?.formData?.mobileNumber}
            </FormFeedback>
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              invalid={
                error.errors?.response?.formData?.password ? true : false
              }
            />
            <FormFeedback>
              {error.errors?.response?.formData?.password}
            </FormFeedback>
          </div>

          <div className="mb-2">
            <label htmlFor="role">Select Role</label>
            <select
              className="form-control"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          {formData.role === "admin" && (
            <div className="mb-2">
              <label htmlFor="adminId">Admin ID </label>
              <input
                type="text"
                placeholder="Enter Admin ID"
                className="form-control"
                name="adminId"
                value={formData.adminId}
                onChange={handleChange}
                invalid={
                  error.errors?.response?.formData?.adminId ? true : false
                }
              />
              <FormFeedback>
                {error.errors?.response?.formData?.adminId}
              </FormFeedback>
            </div>
          )}

          {formData.role === "vendor" && (
            <div className="mb-2">
              <label htmlFor="vendorId">Vendor ID</label>
              <input
                type="text"
                placeholder="Enter Vendor ID"
                className="form-control"
                name="vendorId"
                value={formData.vendorId}
                onChange={handleChange}
                invalid={
                  error.errors?.response?.formData?.vendorId ? true : false
                }
              />
              <FormFeedback>
                {error.errors?.response?.formData?.vendorId}
              </FormFeedback>
            </div>
          )}

          <div className="d-grid mt-2">
            <button className="btn btn-primary">Sign up</button>
          </div>
          <p className="text-end mt-2">
            Already registered?{" "}
            <Link to="/login" className="ms-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>  );
}

export default Signup;

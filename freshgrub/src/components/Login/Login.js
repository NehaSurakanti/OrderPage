import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { doLogin } from "../../auth";
import { login } from "../../services/userService";
import "./login.css";
import styles from "../../pages/body.module.css";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../components/CustomNavbar";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	const [error, setError] = useState({
		errors: {},
		isError: false,
	});

	const handleChange = (event, field) => {
		let actualValue = event.target.value;
		setFormData({
			...formData,
			[field]: actualValue,
		});
	};

	//submitting the form
	const handleSubmit = (e) => {
		e.preventDefault();

		if (formData.email.trim() === "" || formData.password.trim() === "") {
			toast.error("Email or password is empty");
			return;
		}
		if (formData.password.trim() < 8) {
			toast.error("minimum 8 characters required");
			return;
		}

		//call to server to generate token
		login(formData)
			.then((data) => {
				console.log("success log");
				console.log(data);
				//to save data to localStorage
				doLogin(data, () => {
					console.log("login detail is saved to localStorage");
					//redirecting to user home page
					if (data.message === "Login Success" && data.role === "user") {
						navigate("/user", { state: { userData: data } });
					}
					//redirecting to vendor home page
					if (data.message === "Login Success" && data.role === "vendor") {
						navigate("/vendor", { state: { userData: data } });
					}
					if (data.message === "Password Not Match") {
						toast.error("Password does not Match");
					}
					if (data.message === "Email not exists") {
						toast.error("Email does not exist!");
					}
				});

				setFormData({
					email: "",
					password: "",
				});
			})
			.catch((error) => {
				console.log(error);
				console.log("error log");
				if (error.response.status === 400 || error.response.status === 404) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Something went wrong!");
				}

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
			<div
				className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'
				class={styles.imagelog}
			>
				<div
					className='form_container p-5 rounded bg-white mx-auto'
					style={{ textAlign: "left" }}
				>
					<form onSubmit={handleSubmit}>
						<h3 className='text-center'>Sign in</h3>
						<div className='mb-3'>
							<label htmlFor='email' className='pb-2'>
								Email
							</label>
							<input
								type='email'
								placeholder='Enter email'
								className='form-control'
								id='email'
								value={formData.email}
								onChange={(e) => handleChange(e, "email")}
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='password' className='pb-2'>
								Password
							</label>
							<input
								type='password'
								placeholder='Enter password'
								className='form-control'
								id='password'
								value={formData.password}
								onChange={(e) => handleChange(e, "password")}
							/>
						</div>
						<div className='d-grid'>
							<button className='btn btn-primary'>Sign in</button>
						</div>
						<p className='text-end mt-4'>
							Not yet Registered?
							<Link to='/signup' className='ms-2'>
								Sign up
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Container, Row, Col } from "reactstrap";
import BodyTemplate from "../../templates/BodyTemplate";

import "./menu-pack.css";

const MenuPack = ({ title, items }) => {
	const [filter, setFilter] = useState("");
	const navigate = useNavigate();

	return (
		<BodyTemplate>
			<section>
				<Container>
					<Row>
						<Col lg='12' className='text-center mb=4'>
							<h3 className='menu__title'>{title}</h3>
						</Col>
						<Col lg='12' className='text-center mb-5'>
							{items?.map((val) => {
								return (
									<button
										key={val.id}
										className={`filter-btn ${
											filter === val.name ? "active__btn" : ""
										}`}
										onClick={() => {
											setFilter(val.name);
											navigate(`${val.id}`, { state: { name: val.name } });
										}}
									>
										{val.name}
									</button>
								);
							})}
							{/* <button
								className={`filter-btn ${
									filter === "FAST-FOOD" ? "active__btn" : ""
								}`}
								onClick={() => {
									setFilter("FAST-FOOD");
									navigate("/fastfood");
								}}
							>
								{" 	Fast Food "}
							</button>
							<button
								className={`filter-btn ${
									filter === "MEALS" ? "active__btn" : ""
								}`}
								onClick={() => {
									setFilter("MEALS");
									navigate("/meals");
								}}
							>
								{"Meals "}
							</button>
							<button
								className={`filter-btn ${
									filter === "BEVERAGES" ? "active__btn" : ""
								}`}
								onClick={() => {
									setFilter("BEVERAGES");
									navigate("/beverages");
								}}
							>
								{"Beverages "}
							</button> */}
						</Col>
					</Row>
				</Container>
			</section>
		</BodyTemplate>
	);
};

export default MenuPack;

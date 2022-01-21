import React from "react";
import "../../styles/views.css";
import Cards from "../component/Cards";

const Home = () => {
	return (
		<>
			<div className="container home">
					{/*Descripcion*/}
				<h1 className="title-description">¡Welcome user!</h1>
				<br/>
				<h5 className="description">
					{
						`It is scientifically proven that dieting generates anxiety and stress in the highest percentage of 
						people who practice it, and in some cases depression.`
					}
					<br/>
					<br/>
					{
						`Health is an app that seeks to avoid dieting as much as possible, focusing on a good diet and its 
						balance according to the physical activity (or not) that the user performs, respecting any type of 
						allergy or illness that requires certain dietary restrictions .`
					}
				</h5>
						
				{/* <div className="col-12">
					<img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/05070155/healthy-food-1024x768.jpeg" alt="..."/>
				</div> */}
				<Cards/>
			</div>

			<div className="row">
				<div className="border-top border-success flor">
					<p>Made by Diego and Arausy</p>
				</div>
			</div>
		</>
	);
};

export default Home;
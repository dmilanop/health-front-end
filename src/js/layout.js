import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home.jsx";
import Medical_History from "./views/Medical_History.jsx";
import Profile from "./views/Profile.jsx";
import Ingredients from "./views/Ingredients.jsx";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar.jsx";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/medical_history">
							<Medical_History />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/ingredients/:id">
							<Ingredients />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

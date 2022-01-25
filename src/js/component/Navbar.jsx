import React from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";

const Navbar = () => {
	return (
		<> 
			<nav className="navbar">
				<div className="container-fluid">
					<div className="navbar-brand d-flex">
							<i className="fas fa-seedling"></i>
							<p className="app-name">HEALTH</p>
					</div>

					<div className="modal-signin-singup d-flex"> 

							<div className="signin">{/*boton de signup*/}
								<Signup/>
							</div>

							<div className="singup"> {/*boton de signin*/}
								<Signin/>
							</div>

						</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

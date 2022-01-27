import React,{useContext} from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Navbar = () => {
	const{store, actions} = useContext(Context);
	return (
		<> 
			{store.token == undefined ? (
				<nav className="navbar">
					<div className="container-fluid">
						<div className="navbar-brand d-flex">
							<i className="fas fa-seedling"></i>
							<Link to="/">
							<p className="app-name">HEALTH</p>
							</Link>
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
			) : (
				<nav className="navbar">
					<div className="container-fluid">
						<div className="navbar-brand d-flex">
							<i className="fas fa-seedling"></i>
							<Link to="/">
							<p className="app-name">HEALTH</p>
							</Link>
						</div>
					</div>
				</nav>		
			)}
		</>
	);
};

export default Navbar;

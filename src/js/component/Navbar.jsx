import React from "react";

const Navbar = () => {
	return (
		<> 
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<div className="navbar-brand d-flex">
							<i className="fas fa-seedling"></i>
							<p className="app-name">HEALTH</p>
					</div>
					<div className="modal-singin-singup d-flex"> 

							<div className="singin">{/*boton de singin*/}
								<button type="button" class="btn btn-outline-success but1" data-bs-toggle="modal" data-bs-target="#exampleModal">login</button>

								<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title title-modal1" id="exampleModalLabel">Please enter your info</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										...
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-primary go1">Go</button>
									</div>
									</div>
								</div>
								</div>
							</div>
							<br/>

							<div className="singup"> {/*boton de singup*/}
								<button type="button" class="btn btn-outline-success but2" data-bs-toggle="modal" data-bs-target="#exampleModal">logup</button>

								<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title title-modal2" id="exampleModalLabel">Please enter your info</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										...
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-primary go2">Go</button>
									</div>
									</div>
								</div>
								</div>
							</div>

						</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

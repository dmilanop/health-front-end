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
								<button type="button" className="btn btn-outline-success but1" data-bs-toggle="modal" data-bs-target="#exampleModal">logup</button>

								<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title title-modal1" id="exampleModalLabel">Please enter your info</h5>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body">

												<form>
													<div className="mb-3">
														<label for="exampleInputEmail1" className="form-label">Email address</label>
														<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
														<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
													</div>
													<div className="mb-3">
														<label for="exampleInputPassword1" className="form-label">Password</label>
														<input type="password" className="form-control" id="exampleInputPassword1"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputPassword1" className="form-label">Name</label>
														<input type="password" className="form-control" id="exampleInputPassword1"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputPassword1" className="form-label">Lastname</label>
														<input type="password" className="form-control" id="exampleInputPassword1"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputPassword1" className="form-label">Gender</label>
														<input type="password" className="form-control" id="exampleInputPassword1"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputPassword1" className="form-label">Date of birth</label>
														<input type="password" className="form-control" id="exampleInputPassword1"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputPassword1" className="form-label">¿Do you suffer from any ailment?</label>
														<input type="password" className="form-control" id="exampleInputPassword1"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputPassword1" className="form-label">¿Do you have some type of physical activity?</label>
														<input type="password" className="form-control" id="exampleInputPassword1"/>
													</div>
												</form>
												
											</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-primary go1">Send</button>
										</div>
										</div>
									</div>
								</div>
							</div>

							<div className="singup"> {/*boton de singup*/}
								<button type="button" className="btn btn-outline-success but2" data-bs-toggle="modal" data-bs-target="#exampleModal">login</button>

								<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title title-modal2" id="exampleModalLabel">Please enter your info</h5>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<div className="mb-3">
													<label for="exampleInputEmail1" className="form-label">Email address</label>
													<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
													<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
												</div>
												<div className="mb-3">
													<label for="exampleInputPassword1" className="form-label">Password</label>
													<input type="password" className="form-control" id="exampleInputPassword1"/>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-primary go2">Send</button>
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

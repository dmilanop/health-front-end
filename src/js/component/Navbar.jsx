import React from "react";

const Navbar = () => {
	return (
		<> 
			<nav className="navbar">
				<div className="container-fluid">
					<div className="navbar-brand d-flex">
							<i className="fas fa-seedling"></i>
							<p className="app-name">HEALTH</p>
					</div>

					<div className="modal-singin-singup d-flex"> 

							<div className="singin">{/*boton de singup*/}
								<button type="button" className="btn btn-outline-light but1" data-bs-toggle="modal" data-bs-target="#singupModal">Sing up</button>

								<div className="modal fade" id="singupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
														<label for="passwordInputText1" className="form-label">Password</label>
														<input type="text" className="form-control" id="exampleInputText1" aria-describedby="TextdHelp"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputName1" className="form-label">Name</label>
														<input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputLasame1" className="form-label">Lastname</label>
														<input type="text" className="form-control" id="exampleInputLastname1" aria-describedby="lastnameHelp"/>
													</div>
													<div className="mb-3">
														<label for="exampleInputName1" className="form-label">Gender</label>
														<input type="text" className="form-control" id="exampleInputGender1" aria-describedby="GenderHelp"/>
														<div id="genderHelp" className="form-text">Response female/male</div>
													</div>
													<div className="mb-3">
														<label for="exampleInputDate1" className="form-label">Date of birth</label>
														<input type="date" className="form-control" id="exampleInputdate1" aria-describedby="DateHelp"/>
														<div id="dateHelp" className="form-text">Response day/month/year</div>
													</div>
													<div className="mb-3">
														<label for="exampleInputQuestion1" className="form-label">¿Do you suffer from any ailment?</label>
														<input type="text" className="form-control" id="exampleInputquestion1" aria-describedby="QuestionHelp"/>
														<div id="questionHelp" className="form-text">Response yes/no</div>
													</div>
													<div className="mb-3">
														<label for="exampleInputEx1" className="form-label">¿Do you have some type of physical activity?</label>
														<input type="text" className="form-control" id="exampleInputEx1"/>
														<div id="exHelp" className="form-text">Response yes/no</div>
													</div>
												</form>
												
											</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-outline-success go1">Send</button>
										</div>
										</div>
									</div>
								</div>
							</div>

							<div className="singup"> {/*boton de singin*/}
								<button type="button" className="btn btn-outline-light but2 ms-5" data-bs-toggle="modal" data-bs-target="#singinModal">Sing in</button>

								<div className="modal fade" id="singinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title title-modal2" id="exampleModalLabel">Please enter your info</h5>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<div className="mb-3">
													<label for="exampleInputEmail1" className="form-label">Email address</label>
													<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
													<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
												</div>
												<div className="mb-3">
													<label for="exampleInputPassword1" className="form-label">Password</label>
													<input type="text" className="form-control" id="exampleInputPassword1"/>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-outline-success go2">Send</button>
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

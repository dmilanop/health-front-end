import React from "react";

const Signin = () =>{
    return(
        <>
            <button type="button" className="btn btn-outline-light but2 ms-5" data-bs-toggle="modal" data-bs-target="#signinModal">Sing in</button>

            <div className="modal fade" id="signinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        </>
    );
};

export default Signin;
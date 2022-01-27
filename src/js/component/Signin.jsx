import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Signin = () =>{
    const {store, actions} = useContext(Context)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const handleLogIn = async () =>{
        let login = {email, password};
        let response = await actions.signIn(login);

        if (response.ok){
            setEmail("");
            setPassword("");
            history.push("/login")
        }else{
            alert("oh oh, bad credentials")
        }
    }

    return(
        <>
            <button type="button" className="btn btn-outline-light but2 ms-5" data-bs-toggle="modal" data-bs-target="#signinModal">Sign in</button>

            <div className="modal fade" id="signinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title title-modal2" id="exampleModalLabel">Please enter your info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={e =>{setEmail(e.target.value);}}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label hatmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputPassword1"
                                    value={password}
                                    onChange={e =>{setPassword(e.target.value);}}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-success go2" onClick={handleLogIn}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Signup = () =>{
    const{store, actions} = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("")
    const [ailmentAnswer, setAilmentAnswer] = useState("");
    const [exerciseAnswer, setExerciseAnswer] = useState("");
    let history = useHistory();

    const sendInfo = async () =>{
        let newUser = {email: email, password: password, name: name, last_name: lastName, gender: gender, date_of_birth: date, ailments: ailmentAnswer, exercises: exerciseAnswer};
        let response = await actions.signUp(newUser);

        if (response.ok){
            setEmail("");
            setPassword("");
            setName("");
            setLastName("");
            setGender("");
            setDate("");
            setAilmentAnswer("");
            setExerciseAnswer("");
            history.push('/login')
        }else{
            alert("oh oh, something went wrong, please try again")
        }
    }

    return(
        <>
            <button type="button" className="btn btn-outline-light but1" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</button>

            <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title title-modal1" id="exampleModalLabel">Please enter your info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
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
                                    <label htmlFor="passwordInputText1" className="form-label">Password</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputText1" 
                                        aria-describedby="TextdHelp" 
                                        value={password}
                                        onChange={e =>{setPassword(e.target.value);}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputName1" 
                                        aria-describedby="nameHelp"
                                        value={name}
                                        onChange={e =>{setName(e.target.value);}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputLasame1" className="form-label">Lastname</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputLastname1" 
                                        aria-describedby="lastnameHelp"
                                        value={lastName}
                                        onChange={e =>{setLastName(e.target.value);}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName1" className="form-label">Gender</label>
                                    <select 
                                        class="form-select" 
                                        aria-label=".form-select-sm example"
                                        value={gender}
                                        onChange={e =>{setGender(e.target.value);}}
                                    >
                                        <option selected>Select your answer</option>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                    </select> 
                                    <div id="genderHelp" className="form-text">Response female/male</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputDate1" className="form-label">Date of birth</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="exampleInputdate1" 
                                        aria-describedby="DateHelp"
                                        value={date}
                                        onChange={e =>{setDate(e.target.value);}}
                                    />
                                    <div id="dateHelp" className="form-text">Response day/month/year</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputQuestion1" className="form-label">¿Do you suffer from any ailment?</label>
                                    <select 
                                        class="form-select" 
                                        aria-label=".form-select-sm example"
                                        value={ailmentAnswer}
                                        onChange={e =>{setAilmentAnswer(e.target.value);}}
                                    >
                                        <option selected>Select your answer</option>
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                    <div id="questionHelp" className="form-text">Response yes/no</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEx1" className="form-label">¿Do you have some type of physical activity?</label>
                                    <select 
                                        class="form-select" 
                                        aria-label=".form-select-sm example"
                                        value={exerciseAnswer}
                                        onChange={e =>{setExerciseAnswer(e.target.value);}}
                                    >
                                        <option selected>Select your answer</option>
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                    <div id="exHelp" className="form-text">Response yes/no</div>
                                </div>
                            </form>
                            
                        </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-outline-success go1" 
                            onClick={sendInfo}
                        >
                            Send
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
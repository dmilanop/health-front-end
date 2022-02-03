import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"

const Profile = () => {
    const{ store,actions } = useContext(Context)

    const[medicalHistory, setMedicalHistory] = useState({
        height: parseFloat(store.medical_history.height),
        weight: parseInt(store.medical_history.weight),
        diabetes: store.medical_history.diabetes,
        uricAcid: store.medical_history.uric_acid,
        gastricUlcers: store.medical_history.gastric_ulcers,
        gastritis: store.medical_history.gastritis,
        cholesterol: store.medical_history.cholesterol,
        triglycerides: store.medical_history.triglycerides,
        dairyIntolerance: store.medical_history.dairy_intolerance,
        celiac: store.medical_history.celiac,
        obesity: store.medical_history.obesity,
        kidneyStones: store.medical_history.kidney_stones,
        inflammationOfTheColon: store.medical_history.inflammation_of_the_colon,
        heartProblems: store.medical_history.heart_problems
    })
    const sendMedicalHistory = async () => {
        let newHistory = {
            height: medicalHistory.height, 
            weight: medicalHistory.weight, 
            diabetes: medicalHistory.diabetes, 
            uric_acid: medicalHistory.uricAcid, 
            gastric_ulcers: medicalHistory.gastricUlcers,
            gastritis: medicalHistory.gastritis,
            cholesterol: medicalHistory.cholesterol,
            triglycerides: medicalHistory.triglycerides,
            dairy_intolerance: medicalHistory.dairyIntolerance,
            celiac: medicalHistory.celiac,
            obesity: medicalHistory.obesity,
            kidney_stones: medicalHistory.kidneyStones,
            inflammation_of_the_colon: medicalHistory.inflammationOfTheColon,
            heart_problems: medicalHistory.heartProblems
        }
        let response = await actions.resetMedicalHistory(newHistory)
        if (response.ok){
            actions.getMedicalHistory()
        }
        else{
            alert("oh oh, something went wrong, please try again")
        }
    }

    return(
        <>
        <div className="card card1">
            <h5 className="card-header">Recipe</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
        <button type="button" className="btn but2 ms-5" data-bs-toggle="modal" data-bs-target="#signinModal">Sign in</button>    
        
        <div className="modal fade" id="signinModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title title-modal2" id="exampleModalLabel">Please enter your info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputHeight" className="form-label label">Enter your height in mt here</label>
                                <input 
                                type="number"
                                className="form-control select"
                                id="exampleInputHeight"                            
                                aria-describedby="heightHelp"                           
                                name="height"                           
                                value={medicalHistory.height}                           
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value})}}                                                      
                                />
                                <div id="heightHelp" className="form-text text">Meters</div>                                                  
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputWeight" className="form-label label">Enter your weight in kg here</label>
                                <input 
                                type="number"
                                className="form-control select"
                                id="exampleInputWeight"                            
                                aria-describedby="weightHelp"                           
                                name="weight"                           
                                value={medicalHistory.weight}                           
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value})}}                                                      
                                />
                                <div id="weightHelp" className="form-text text">Kilograms</div>                                                  
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Diabetes</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="diabetes"
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                value={medicalHistory.diabetes}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Uric acid</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="uricAcid"
                                value={medicalHistory.uricAcid}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Gastric ulcers</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="gastricUlcers"
                                value={medicalHistory.gastricUlcers}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Gastritis</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="gastritis"
                                value={medicalHistory.gastritis}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Cholesterol</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="cholesterol"
                                value={medicalHistory.cholesterol}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Triglycerides</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="triglycerides"
                                value={medicalHistory.triglycerides}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Daily intolerance</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                value={medicalHistory.dairyIntolerance}
                                name="dairyIntolerance"
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Celiac</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                value={medicalHistory.celiac}
                                name="celiac"
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Obesity</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="obesity"
                                value={medicalHistory.obesity}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Kidney stones</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="kidneyStones"
                                value={medicalHistory.kidneyStones}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Inflammation of the colon</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                value={medicalHistory.inflammationOfTheColon}
                                name="inflammationOfTheColon"
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEx1" className="form-label">Heart problems</label>
                                <select 
                                className="form-select" 
                                aria-label=".form-select-sm example"
                                name="heartProblems"
                                value={medicalHistory.heartProblems}
                                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                                >
                                    <option value="">Select your answer</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div id="exHelp" className="form-text">Response yes/no</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-success go2" onClick={sendMedicalHistory}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}

export default Profile
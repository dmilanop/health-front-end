import React, {useContext, useState} from "react"
import { useHistory } from "react-router-dom"
import { Context } from "../store/appContext"


const Medical_History = () => {
    const{store, actions} = useContext(Context)
    const[medicalHistory, setMedicalHistory] = useState({
        height: parseFloat(""),
        weight: parseInt(""),
        diabetes: "",
        uricAcid: "",
        gastricUlcers: "",
        gastritis: "",
        cholesterol: "",
        triglycerides: "",
        dairyIntolerance: "",
        celiac: "",
        obesity: "",
        kidneyStones: "",
        inflammationOfTheColon: "",
        heartProblems: ""
})
    console.log(typeof medicalHistory.height)
    let history = useHistory()

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
            inflammation_of_the_colon: medicalHistory.inflametionOfTheColon,
            heart_problems: medicalHistory.heartProblems
        }
        let response = await actions.medicalHistory(newHistory)

        if (response.ok){
            setMedicalHistory({
                height: parseFloat(""),
                weight: parseInt(""),
                diabetes: "",
                uricAcid: "",
                gastricUlcers: "",
                gastritis: "",
                cholesterol: "",
                triglycerides: "",
                dairyIntolerance: "",
                celiac: "",
                obesity: "",
                kidneyStones: "",
                inflammationOfTheColon: "",
                heartProblems: ""
            })
            history.push('/profile')
        }
        else{
            alert("oh oh, something went wrong, please try again")
        }
    }

    return(
        <>
        <div>
            <h1 className="h1">Medical Form</h1>
        </div>
        <form className="form">
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
                <label htmlFor="exampleInputEx1" className="form-label label">Diabetes</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="diabetes"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Uric Acid</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="uricAcid"
                onChange={e =>{setMedicalHistory({...user, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Gastric Ulcers</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="gastricUlcers"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Gastritis</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="gastritis"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Cholesterol</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="cholesterol"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Triglycerides</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="triglycerides"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Dairy Intolerance</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="dairyIntolerance"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Celiac</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="celiac"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Obesity</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="obesity"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Kidney Stones</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="kidneyStones"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Inflammation of the Colon</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="inflammationOfTheColon"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEx1" className="form-label label">Heart Problems</label>
                <select 
                className="form-select select" 
                aria-label=".form-select-sm example"
                name="exercises"
                onChange={e =>{setMedicalHistory({...medicalHistory, [e.target.name]:e.target.value});}}
                >
                    <option value="">Select your answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div id="exHelp" className="form-text text">Response yes/no</div>
            </div>
            <div className="modal-footer">
                <button 
                type="button" 
                className="btn btn-outline-success go1 send" 
                data-bs-dismiss="modal"
                onClick={sendMedicalHistory}
                >
                    Send
                </button>
            </div>
        </form>
        </>
    )
}

export default Medical_History
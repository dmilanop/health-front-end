import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const Signout = () => {
    const { actions } = useContext(Context)
    const history = useHistory()

    const deleteToken = () => {
        const deleteToken = actions.signOut()
        
        if(deleteToken){
            history.push('/')
        }
        else{
            alert("Try again")
        }
    }

    return(
        <>
        <button type="button" className="btn btn-outline-light but3 ms-5" onClick={deleteToken}>Sign Out</button>
        </>
    );
};

export default Signout;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

const Profile = () => {
    const{ actions } = useContext(Context)

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
        </>
    )
}

export default Profile
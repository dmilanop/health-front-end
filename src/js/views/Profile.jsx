import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cards from "../component/Cards.jsx";
import { Context } from "../store/appContext"

const Profile = () => {
    const{ store, actions } = useContext(Context)

    return(
        <>
        <div className="container">

            <h1 className="user">Here are your recipes {store.user}</h1>
            
            <Cards/>
            
            <div>
                <Link to="/profile/userinformation"><button type="button" className="btn btn-outline-success go2">Information</button></Link>
            </div>
            <br/>
            <br/>
        </div>
        <div className="row">
            <div className="border-top border-success flor">
                <p>Made by Diego and Arausy from 4geeks academy</p>
			</div>
	    </div>
        </>
    )
}

export default Profile
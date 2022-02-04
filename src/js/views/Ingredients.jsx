import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Ingredients = () => {
    const{ store , actions } = useContext(Context)
    const{ id } = useParams()
    
    useEffect(() => {
        actions.getIngredients(id)
    },[])

    return(
        <>
        <div>
            <Link to='/profile'><button type="button" className="btn btn-outline-success">Back profile</button></Link>
        </div>
        <div className="container">
            <ul className="list-group">{store.ingredients.map((item) => {
                return(
                    <>
                    <li  className="list-group-item"  key={item.name}>
                        Name ingredients: {item.name}
                        <br/>
                        Amount in metric: {item.amount["metric"].value} {item.amount["metric"].unit}
                        <br/>
                        Amount in us: {item.amount["us"].value} {item.amount["us"].unit}
                    </li>
                    
                    </>
                )
                
            })}</ul>
        </div>
        <div className="row">
			<div className="border-top border-success flor">
                <p>Made by Diego and Arausy from 4geeks academy</p>
			</div>
	    </div>
        </>
    )
};

export default Ingredients;
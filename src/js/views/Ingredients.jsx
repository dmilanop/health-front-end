import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Ingredients = () => {
    const{ store , actions } = useContext(Context)
    const{ id } = useParams()
    
    useEffect(() => {
        actions.getIngredients(id)
    },[])

    return(
        <>
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
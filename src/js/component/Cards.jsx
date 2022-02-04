import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Cards = () =>{
    const{ store } = useContext(Context)

    return(
        <>
        {store.token == undefined ? (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={"https://media.istockphoto.com/photos/healthy-buddha-bowl-lunch-with-grilled-chicken-quinoa-spinach-avocado-picture-id920931456?k=20&m=920931456&s=612x612&w=0&h=s-X-_8QT27E62QYufCKClGhCEiv687MXuXcbVQnRi5E="} alt="..."/>
                            <div className="card-body">
                                <p className="card-text">{`A diabetes diet is a healthy eating plan that is naturally high in nutrients and low in fat and calories. The key elements are fruits, vegetables and whole grains. In fact, a diabetes diet is the best eating plan for almost everyone.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={"https://media.istockphoto.com/photos/healthy-food-for-balanced-flexitarian-mediterranean-diet-concept-picture-id1159204281?k=20&m=1159204281&s=612x612&w=0&h=QqXPsKI_9TRGGdnTh8Xz5ZkSOUG9K8bNeqjBJK-SuJ8="} alt="..."/>
                            <div className="card-body">
                                <p className="card-text">{`If your workout lasts longer than 60 minutes, consider having a healthy snack during your workout. It can be fruit, yogurt or an energy bar. Then eat carbohydrates and protein within two hours, if possible.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={"https://selecthealth.org/-/media/selecthealth/blogs/post/2020/03/healthy_food_healthy_diet_facebook.ashx?h=800&w=1200"} alt="..."/>
                            <div className="card-body">
                                <p className="card-text">{`To lose weight in 15 days it is necessary to follow a healthy and balanced diet that includes fruits, vegetables and whole foods rich in fiber, avoiding the consumption of industrialized foods, fried foods, frozen meals such as pizzas and lasagna, sausages, fast foods, among others.`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <div className="container recipe">
                <div className="row">
                   
                        {store.recipes ? (store.recipes.map(item => {
                            return(
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="card" key={item.id} item={item}>
                                        <img src={item.image} alt="..."/>
                                        <div className="card-body info">
                                            <p className="card-text">{item.title}</p>
                                            <Link to={`/ingredients/${item.id}`}><button type="button" className="btn btn-outline-success">Recipe</button></Link>
                                        </div>
                                    </div>
                                </div>)
                        })) : null}
                </div>
            </div>
        )}
        </>
    );
}

export default Cards;
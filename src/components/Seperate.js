import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const Seperate=()=>{
    
    const {productid}=useParams();
    const itemurl=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productid}`
    const [itemdata,setItemdata]=useState(null);
    useEffect(()=>{
        fetch(itemurl)
        .then((response) => {
          return response.json();
        })
        .then((dat) => {
          console.log(dat.meals[0]);
          setItemdata(dat.meals[0]);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    },[itemurl])



    return(
        <div>
            {(itemdata?.idMeal)?
            <>
                   <div className="photo">
                        <img src={itemdata.strMealThumb} alt="mnfj"/>
                        <p>{itemdata.strMeal}</p>
                   </div>
                   <div className="ingredient">
                    <h1>Origin from:</h1>
                    <p className="country">{itemdata.strArea}</p>
                  <br/>
                  <br/>
                    <h2>Ingredients:</h2>
                         <p>{itemdata.strIngredient1}</p>
                         <p>{itemdata.strIngredient2}</p>
                         <p>{itemdata.strIngredient3}</p>
                         <p>{itemdata.strIngredient4}</p>
                         <p>{itemdata.strIngredient5}</p>
                         <p>{itemdata.strIngredient6}</p>
                         <p>{itemdata.strIngredient7}</p>
                         <p>{itemdata.strIngredient8}</p>
                         <p>{itemdata.strIngredient9}</p>
                  </div>
                   <div className="ins">
                    <h2 className="instruct">Instructions</h2><br/>
                    <p>{itemdata.strInstructions}</p>
                   </div>
                   <iframe width="560" height="315" src={itemdata.strYoutube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </>
                :<h2>Loading</h2>}
              
       </div>
    )
}
export default Seperate;
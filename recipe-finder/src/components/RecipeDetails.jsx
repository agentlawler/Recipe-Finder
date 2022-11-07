import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RecipeDetails = (props) => {

    let {idMeal} = useParams()

    const [recipe, setRecipe] = useState('')

    useEffect (() => {
        let selectedRecipe = props.find(
            (recipe) => recipe.idMeal === parseInt(idMeal)
        )
            setRecipe(selectedRecipe)

    },[recipe,idMeal])


    return recipe ? (
        <div className="recipeDetail">
            <div className="detailHeader">
                {/* image here */}
            </div>
            <div className="recipeInfo">
                <h1 className="recipeTitle"></h1>
                <h3 className="recipeCat"></h3>
                <h3 className="recipeOrigin">Origin: </h3>
                {/* next few lines of code is figuring out how to populate ingredients */}
                <p className="recipeInstruct">Insturctions: </p>
            </div>
        </div>
    ): null
}

export default RecipeDetails
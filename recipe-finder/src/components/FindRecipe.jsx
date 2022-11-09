import { useState } from "react"
import RecipeList from "./RecipeList"

const FindRecipe = ({recipes}) => {

    const initialState = {
        id: '',
        ingredient: '',
    }

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])
    
    const [formState, setFormState] = useState(initialState)

    const addIngredient = (event) => {
        event.preventDefault()
        setIngredients(...ingredients, newIngredient[''])
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addIngredient(event)
        setFormState(initialState)
        
    }

    const handleChange = (event) => {
        setFormState({...formState, ['']: event.target.value})
        console.log(formState)
        setNewIngredient({...newIngredient, ['']: event.target.value})
        console.log(newIngredient)
    }

     const searchFilter = () => {
        recipes.filter((recipe) => {
            console.log(recipe)
            if (recipe.ingredients.includes(ingredients)){return(recipe)} 
        })
     }  

    console.log(ingredients)
    //console.log(searchFilter())
    return (
        <div>
            <div className="finderForm">
                <img src='https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6' alt='bannerAd'/>
                <h2>This is the finder page</h2>
                <p>Instruction blurb</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="ingredients"></label>
                        <input type='text'
                                id="ingredients"
                                onChange={handleChange}
                                value={formState.ingredients}>
                                </input>
                        
                        <button type='submit'>Add</button>
                </form>
            </div>
            <div className="recipeBlock">
                {/* this is where mapped recipes go */}
            </div>
            <div className="addedIng">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )

}
export default FindRecipe
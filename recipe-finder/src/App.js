import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import FindRecipe from './components/FindRecipe'



function App() {



  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
      const getRecipes = async () => {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
          console.log(response.data.meals)
          setRecipes(response.data.meals)
          
      }

      getRecipes()
  }, [])

  



  return (
    <div className="App">
      <div className='navBar'>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Recipes' element={<RecipeList recipes={recipes}/>}/>
          <Route path='/Recipes/:idMeal' element={ <RecipeDetails recipes={recipes}/>}/>
          <Route path='/Finder' element={<FindRecipe recipes={recipes}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

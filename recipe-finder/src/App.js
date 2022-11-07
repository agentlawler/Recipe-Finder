import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import FindRecipe from './components/FindRecipe'



function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Recipes' element={<RecipeList/>}/>
          <Route path='/Recipes/:idMeal' element={ <RecipeDetails />}/>
          <Route path='/Finder' element={<FindRecipe/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

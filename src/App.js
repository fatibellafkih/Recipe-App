import React, { useState, Fragment, useEffect } from 'react';
import RecipeTable from './tables/RecipeTable';
import AddRecipeForm from './forms/AddRecipeForm';
import EditRecipeForm from './forms/EditRecipeForm';

const App = () => {
 /* const recipesData = [
    { id: 1, name: 'Brownies', type: 'sweet' , ingredients: 'eggs - flour - baking powder'},
    { id: 2, name: 'Lasagna', type: 'salty' , ingredients: 'ground beef - tomato paste - lasagna noodles' },
    { id: 3, name: 'Fruit Smoothie', type: 'drink' , ingredients: 'frozen fruit - vanilla yogurt - milk' },
  ] */

  // Initial data
  const initialFormState = { id: null, name: '', type: '', ingredients: ''}

  // States
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('myrecipes')))
  const [ currentRecipe, setCurrentRecipe] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)

// local storage
const isFirstRender = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
localStorage.setItem('myrecipes',JSON.stringify(recipes));      
  });

  // Function to add a Recipe
  const addRecipe = recipe => {
    recipe.id = recipes.length + 1
    setRecipes([...recipes, recipe])

  }

  // Function to delete a Recipe
  const deleteRecipe = id => {
    setEditing(false)

    setRecipes(recipes.filter(recipe => recipe.id !== id))
    console.log(recipes)
  }
  
  // Function to edit Recipe   
  // Select Row 
  const updateRecipe = (id, updatedRecipe) => {
    setEditing(false)
    setRecipes(recipes.map(recipe => (recipe.id === id ? updatedRecipe : recipe)))
  }

  // Edit Row
  const editRow = recipe => {
		setEditing(true)
		setCurrentRecipe({ id: recipe.id, name: recipe.name, type: recipe.type, ingredients: recipe.ingredients})
  }
  
  return (
    <div className="container">
      <h1>Recipes CRUD App</h1>
      <div className="flex-row">
      <div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Recipe</h2>
							<EditRecipeForm
								editing={editing}
								setEditing={setEditing}
								currentRecipe={currentRecipe}
								updateRecipe={updateRecipe}
							/>
						</Fragment>
					) : (
						<Fragment>
                        <h2>Add recipe</h2>
                         <AddRecipeForm addRecipe={addRecipe} />
</Fragment> )}
</div>
        <div className="flex-large">
          <h2>View recipes and their ingredients</h2>
          <RecipeTable recipes={recipes} deleteRecipe={deleteRecipe} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App;

import React, { createContext, useContext, useState } from "react"

const RecipesContext = createContext()

export const RecipesProvider = ({ children }) => {
	const [recipeCount, setRecipeCount] = useState(0)

	const value = { recipeCount, setRecipeCount }

	return (
		<RecipesContext.Provider value={value}>
			{children}
		</RecipesContext.Provider>
	)
}

export const useRecipes = () => {
    const context = useContext(RecipesContext);
    if (context === undefined) {
        throw new Error('useRecipes must be used within a RecipesProvider');
    }
    return context;
};

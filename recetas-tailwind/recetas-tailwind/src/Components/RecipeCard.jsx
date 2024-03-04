import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      </div>
    </div>
  );
}

export default RecipeCard;
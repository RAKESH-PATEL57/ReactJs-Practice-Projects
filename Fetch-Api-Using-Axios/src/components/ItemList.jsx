import React from "react";

function ItemList({ items }) {
  return items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} className="card">
        <img src={strMealThumb} alt={strMeal} />
        <div className="content">
          <p>{strMeal}</p>
          <p className="price">${idMeal}</p>
        </div>
      </section>
    );
  });
}

export default ItemList;

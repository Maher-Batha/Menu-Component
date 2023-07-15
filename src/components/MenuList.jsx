import React, { useState } from "react";
import menu from "../data";
import SingleMeal from "./SingleMeal";
const MenuList = () => {
  const menuFilters = [
    "all",
    ...new Set(
      menu.map((item) => {
        return item.category;
      })
    ),
  ];
  const [mealsMenu, setMealsMenu] = useState(menu);
  const filterTheMenu = (expression) => {
    if (expression === "all") {
      setMealsMenu(menu);
      return;
    }
    setMealsMenu(() => {
      return menu.filter((item) => {
        return item.category === expression;
      });
    });
  };
  return (
    <div className="menu-project">
      <div className="container">
        <div className="menu">
          <h1 className="title">our menu</h1>
          <div className="filters">
            {menuFilters.map((item) => {
              return (
                <button
                  key={item}
                  onClick={() => filterTheMenu(item)}
                  className="control-btn"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <ul className="meals">
            {mealsMenu.map((item) => {
              return <SingleMeal key={item.id} {...item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";

function Meals() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(`error gute aasiche bo pilaa 👨‍💻 thik kar : ${err}`);
      });
  }, []);

  return <div className="item-container">{<ItemList items={items}/>}</div>;
}

export default Meals;

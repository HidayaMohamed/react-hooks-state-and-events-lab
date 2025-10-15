import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleAdded() {
    setInCart(inCart => !inCart)
  }
  const color = inCart ? "red" : "yellow"
  const addition = inCart ? "Remove From Cart" : "Add to Cart"
  const lineThrough = inCart ? "line-through" : ""
  return (
    <li className="">
      <span>{name}</span>
      <span className="category" style={{textDecoration: lineThrough}}>{category}</span>
      <button className="add" onClick={handleAdded} style={{backgroundColor: color}} >{ addition }</button>
    </li>
  );
}

export default Item;

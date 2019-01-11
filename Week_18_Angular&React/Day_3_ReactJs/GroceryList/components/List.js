import React from "react";

function List(props) {
  return (
    <div>

    <ul className="list-group">
    <h1>The Regulars</h1>
      {props.groceries.map(item => (
        <li id={item.id} className="list-group-item">
          {item.name}
        </li>
      ))}
     <hr></hr>
    </ul>
    <ul className="list-group">
    <h1>Unpurchased</h1>
    {props.groceries.filter(item => !item.purchased).map(item => (
        <li id={item.id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
      </div>
  );
}

export default List;

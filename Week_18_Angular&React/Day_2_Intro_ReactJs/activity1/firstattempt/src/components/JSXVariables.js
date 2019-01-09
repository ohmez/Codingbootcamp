import React from "react";
const name = 'Keagan';
const thoughts = 'should\'ve taken up more of our bootcamp time';
function noVouls(banana) {
  return banana.replace(/[aeiou]/ig,'');
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}.</h1>
          <h2>My name has {name.length} letters.</h2>
          <h2>I think React {thoughts}.</h2>
          <h3> This should be funny {noVouls(name)}, my name no vouls.</h3>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;

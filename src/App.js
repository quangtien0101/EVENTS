import React from "react";

function HandleClick() {
  console.log("I was clicked");
}

function App() {
  return (
    <div>
      <img
        src="https://www.fillmurray.com/200/100"
        onMouseOver={() => console.log("Hovered!")}
      />
      <br />
      <br />
      <button onClick={HandleClick}>Click me</button>
    </div>
  );
}

export default App;

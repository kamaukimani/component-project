import { useState } from "react";
function SimpleState2() {
  // destrctrurinc
   const [currentState, setCurrentState] = useState(0);

  const increment = () => {
    setCurrentState(currentState + 1);
  };
  const decrement = () => {
    let newState = currentState - 1;
    setCurrentState(newState);
  };

  return (
    <div>
      <h1>Simple state 2</h1>
      <button onClick={decrement}>-</button>
      <span>{currentState}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default SimpleState2;

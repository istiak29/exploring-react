import "./App.css";
import Counter from "./countary";
import Team from "./team";
import Users from "./users";

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const arrowButton = () => {
    alert('clicked by arrow function button')
  }

  const callProblem = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h1>React core concept - 2</h1>
      

      <Users></Users>

      <Team></Team>
      
      <Counter></Counter>

      <button onClick={handleClick}>click me</button>

      <button onClick={arrowButton}>arrow button</button>

      <button
        onClick={() => {
          alert("exceptional way");
        }}
      >
        EXP button
      </button>

      <button onClick={() => callProblem(3)}>add button</button>
    </>
  );
}

export default App;

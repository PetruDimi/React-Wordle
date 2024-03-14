import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";


function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://react-http-requests-b1189-default-rtdb.europe-west1.firebasedatabase.app/solutions.json")
      .then((res) => res.json())
      .then((json) => {
        const solutionWords = json[Object.keys(json)]
        const randomSolution = solutionWords[Math.floor(Math.random() * solutionWords.length)];
        setSolution(randomSolution.word);
      })
      .catch(error=>console.log(error));
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;

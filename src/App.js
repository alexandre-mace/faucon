import './App.css';
import React, {useState, useEffect} from "react";
import data from './domain/definitions.json';

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function App() {
  const [count, setCount] = useState(0);
  const [definitions, setDefinitions] = useState([]);
  const [currentDefinition, setCurrentDefinition] = useState(null);

    useEffect(() => {
        setDefinitions(data);
    }, []);

    useEffect(() => {
        const potentialNewDefinitions = (currentDefinition === null || typeof currentDefinition === "undefined")
            ? definitions
            : definitions.filter(definition => definition.title !== currentDefinition.title)
        setCurrentDefinition(potentialNewDefinitions.random())
    }, [count, definitions]);

  return (
      <>
        <header>
            <div id="maintitle">
                Faucon
            </div>
            <div className={"count"}><span>{count}</span> désinformations comprises.</div>
            <p id="subtitle">S'informer sur la désinformation</p>
        </header>
          {currentDefinition &&
          <main>
              <div>
                  <div className={"definition-title"}>{currentDefinition.title}</div>
                  <div className={"definition-source"}><a target="_blank" rel="noreferrer" href={currentDefinition.sourceUrl}>{currentDefinition.sourceName}</a></div>
                  <div className={"definition-content"}>
                      {currentDefinition.content}
                  </div>
              </div>
              <button className={"action-button"} onClick={() => {
                  setCount(count + 1);

              } }>Compris</button>
          </main>
          }
      </>
  );
}

export default App;

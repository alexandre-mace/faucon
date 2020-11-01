import './App.css';
import React, {useEffect, useState} from "react";
import data from './domain/definitions.json';
import getDefinition from "./application/query/getDefinition";

// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

function App() {
    const [count, setCount] = useState(0);
    const [definitions] = useState(data);
    const [currentDefinition, setCurrentDefinition] = useState(null);

    useEffect(() => {
        const potentialNewDefinitions = (currentDefinition === null || typeof currentDefinition === "undefined")
            ? definitions
            : definitions.filter(definition => definition !== currentDefinition.title)

        setCurrentDefinition(getDefinition('Redwashing', setCurrentDefinition))
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
                    <div className={"definition-source"}>
                        <a target="_blank" rel="noreferrer"
                            href={currentDefinition.sourceUrl}>{currentDefinition.sourceName}</a>
                    </div>
                    {currentDefinition.description.map((description, index) => (
                        <div key={index} className={"definition-content"}>
                            {description}
                        </div>
                    ))}
                    {currentDefinition.relateds.length > 0 &&
                    <div className={"definition-related-title"}>
                        Connexes
                    </div>
                    }
                    {currentDefinition.relateds.map((related, index) => (
                        <div key={index} className={"definition-related"} onClick={() => {
                            setCurrentDefinition(getDefinition(related, setCurrentDefinition))
                        }}>
                            {related}
                        </div>
                    ))}
                </div>
                <button className={"action-button"} onClick={() => {setCount(count + 1);}}>Compris</button>
            </main>
            }
        </>
    );
}

export default App;

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
    const [needsNewDefinition, setNeedsNewDefinition] = useState(true);
    const [needsNewRelatedDefinition, setNeedsNewRelatedDefinition] = useState({
        status: false
    });
    const [currentDefinition, setCurrentDefinition] = useState(null);

    useEffect(() => {
        if (needsNewDefinition) {
            const potentialNewDefinitions = (currentDefinition === null || typeof currentDefinition === "undefined")
                ? definitions
                : definitions.filter(definition => definition !== currentDefinition.title)

            getDefinition(potentialNewDefinitions.random(), setCurrentDefinition)
            setNeedsNewDefinition(false)
        }
    }, [needsNewDefinition, definitions]);

    useEffect(() => {
        if (needsNewRelatedDefinition.status) {
            getDefinition(needsNewRelatedDefinition.related, setCurrentDefinition)
            setNeedsNewRelatedDefinition({
                status: false
            })
        }
    }, [needsNewRelatedDefinition, definitions]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [count]);

    return (
        <>
            <header>
                <div id="maintitle">
                    Faucon
                </div>
                <div className={"count"}><span>{count}</span> sujets étudiés.</div>
                <p id="subtitle">S'informer sur la désinformation</p>
            </header>
            <main className={!currentDefinition ? 'main-min' : "main"}>
                {currentDefinition &&
                    <>
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
                            <div className={"related-wrapper"}>
                            {currentDefinition.relateds.map((related, index) => (
                                <div key={index} style={{fontSize: Math.floor(Math.random() * 3.5) + 1 + "rem"  }} className={"definition-related"} onClick={() => {
                                    setCount(count + 1)
                                    setNeedsNewRelatedDefinition({
                                        status: true,
                                        related: related
                                    })
                                }}>
                                    {related}
                                </div>
                            ))}
                            </div>
                        </div>
                        <button className={"action-button"} onClick={() => {
                            setCount(count + 1)
                            setNeedsNewDefinition(true)
                        }}>Compris</button>
                    </>
                }
            </main>

        </>
    );
}

export default App;

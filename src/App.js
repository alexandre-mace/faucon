import './App.css';
import React, {useEffect, useState} from "react";
import data from './domain/definitions.json';
import getDefinition from "./application/query/getDefinition";
import Typing from "react-typing-animation";
import wikipediaParagraphFormatter from "./infrastructure/formatter/wikipediaParagraphFormatter";

let mediaQuery1 = window.matchMedia("(max-width: 600px)");

// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const relatedRatio = mediaQuery1.matches ? 1 : 1;
const relatedTranslateRatio = mediaQuery1.matches ? 20 : 50;

function App() {
    const [count, setCount] = useState(0);
    const [definitions] = useState(data);
    const [loading, setLoading] = useState(false);
    const [needsNewDefinition, setNeedsNewDefinition] = useState(true);
    const [needsNewRelatedDefinition, setNeedsNewRelatedDefinition] = useState({
        status: false
    });
    const [currentDefinition, setCurrentDefinition] = useState(null);

    const delayedCloseLoader = () => {
        setTimeout(() => {
            setLoading(false)
        }, 550);
    }

    useEffect(() => {
        if (needsNewDefinition) {
            const potentialNewDefinitions = (currentDefinition === null || typeof currentDefinition === "undefined")
                ? definitions
                : definitions.filter(definition => definition !== currentDefinition.title)

            setLoading(true)
            delayedCloseLoader()
            getDefinition(potentialNewDefinitions.random(), setCurrentDefinition)
            setNeedsNewDefinition(false)
        }
    }, [needsNewDefinition, definitions]);

    useEffect(() => {
        if (needsNewRelatedDefinition.status) {
            setLoading(true)
            delayedCloseLoader()
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
                {(needsNewDefinition || needsNewRelatedDefinition.status || loading) &&
                    <div className={"loader"}>
                        <Typing>Faucon</Typing>
                    </div>
                }
                {(currentDefinition && !loading) &&
                    <>
                        <div>
                            <div className={"definition-title"}>{currentDefinition.title}</div>
                            <div className={"definition-source"}>
                                <a target="_blank" rel="noreferrer"
                                    href={currentDefinition.sourceUrl}>{currentDefinition.sourceName}</a>
                            </div>
                            {currentDefinition.description.map((description, index) => (
                                <div key={index} className={"definition-content"}>
                                    {wikipediaParagraphFormatter(description)}
                                </div>
                            ))}
                            <div className={"related-wrapper"}>
                            {currentDefinition.relateds.map((related, index) => (
                                <div key={index} style={{fontSize: Math.random() * relatedRatio + 1 + "rem", transform: "translateY(" + -Math.random() * relatedTranslateRatio + "px)"}} className={"definition-related"} onClick={() => {
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

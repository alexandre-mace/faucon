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
    const [seenRelated, setSeenRelated] = useState([]);
    const [needsNewRelatedDefinition, setNeedsNewRelatedDefinition] = useState({
        status: false
    });
    const [currentDefinition, setCurrentDefinition] = useState(null);

    const delayedCloseLoader = () => {
        setTimeout(() => {
            setLoading(false)
        }, 3550);
    }

    useEffect(() => {
        if (needsNewDefinition) {
            const potentialNewDefinitions = (currentDefinition === null || typeof currentDefinition === "undefined")
                ? definitions
                : definitions.filter(definition => definition !== currentDefinition.title)

            setCurrentDefinition(null)
            setLoading(true)
            delayedCloseLoader()
            const localPoolRandomSubject = potentialNewDefinitions.random()
            getDefinition(localPoolRandomSubject, setCurrentDefinition)
            setSeenRelated(seenRelated.concat([localPoolRandomSubject]))
            setNeedsNewDefinition(false)
        }
    }, [needsNewDefinition, definitions]);

    useEffect(() => {
        if (needsNewRelatedDefinition.status) {
            setCurrentDefinition(null)
            setLoading(true)
            delayedCloseLoader()
            getDefinition(needsNewRelatedDefinition.related, setCurrentDefinition)
            setSeenRelated(seenRelated.concat([needsNewRelatedDefinition.related]))
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
                {(needsNewDefinition || needsNewRelatedDefinition.status || loading || currentDefinition === null) &&
                    <div className={"loader"}>
                        <Typing>Faucon</Typing>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={6} />
                    </div>
                }
                {(currentDefinition && !(needsNewDefinition || needsNewRelatedDefinition.status || loading)) &&
                    <>
                        {currentDefinition.hasSevereWarning &&
                            <div className={"definition-warning"}>
                                <span role="img" aria-label="warning">⚠️️</span> Attention, la définition est issue d'un article qui comporte un risque sur la véracité des informations exposées.
                            </div>
                        }
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
                            {currentDefinition.relateds.slice(0,10).filter(related => !seenRelated.includes(related)).map((related, index) => (
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
                            if (currentDefinition.title !== 'Page non atteignable') {
                                setCount(count + 1)
                            }
                            setNeedsNewDefinition(true)
                        }}>Compris</button>
                    </>
                }
            </main>

        </>
    );
}

export default App;

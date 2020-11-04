import React, {useEffect, useState} from 'react';
import wikipediaParagraphFormatter from "../../infrastructure/formatter/wikipediaParagraphFormatter";
import data from "../../domain/definitions.json";
import getDefinition from "../../application/query/getDefinition";
import delayedCloseLoader from "../../infrastructure/utils/delayedCloseLoader";

let mediaQuery1 = window.matchMedia("(max-width: 600px)");
const relatedRatio = mediaQuery1.matches ? 1 : 1;
const relatedTranslateRatio = mediaQuery1.matches ? 20 : 50;

// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const Definition = ({ count, setCount, loading, setLoading }) => {
    const [definitions] = useState(data);
    const [needsNewDefinition, setNeedsNewDefinition] = useState(true);
    const [seenRelated, setSeenRelated] = useState([]);
    const [needsNewRelatedDefinition, setNeedsNewRelatedDefinition] = useState({
        status: false
    });
    const [currentDefinition, setCurrentDefinition] = useState(null);
    const [hasRunningProcess, setHasRunningProcess] = useState(true);

    useEffect(() => {
        if (hasRunningProcess === false) {
            delayedCloseLoader(setLoading)
        }
    }, [hasRunningProcess]);

    useEffect(() => {
        if (needsNewDefinition) {
            const potentialNewDefinitions = (currentDefinition === null || typeof currentDefinition === "undefined")
                ? definitions
                : definitions.filter(definition => definition !== currentDefinition.title)

            setCurrentDefinition(null)
            if (loading !== true) {
                setLoading(true)
            }
            if (hasRunningProcess !== true) {
                setHasRunningProcess(true)
            }
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
            setHasRunningProcess(true)
            getDefinition(needsNewRelatedDefinition.related, setCurrentDefinition)
            setSeenRelated(seenRelated.concat([needsNewRelatedDefinition.related]))
            setNeedsNewRelatedDefinition({
                status: false
            })
        }
    }, [needsNewRelatedDefinition, definitions]);

    useEffect(() => {
        if (currentDefinition !== null) {
            setHasRunningProcess(false)
        }
    }, [currentDefinition, setHasRunningProcess]);

    return (
        <main className={!currentDefinition ? 'main-min' : "main"}>
            {(currentDefinition && !(needsNewDefinition || needsNewRelatedDefinition.status) &&  !loading) &&
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
                }}>Nouvelle définition</button>
            </>
            }
        </main>
    )
}
export default Definition;
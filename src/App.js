import './App.css';
import React, {useEffect, useState} from "react";
import Definition from "./ui/components/Definition";
import Loader from "./ui/components/Loader";
import Information from "./ui/components/Information";

function App() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [informationMode, setInformationMode] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [count]);

    return (
        <>
            <header>
                <div id="maintitle">
                    Faucon
                </div>
                <div className={"count"}><span>{count}</span> sujets étudiés. <span className={"information"}><img onClick={() => setInformationMode(true)} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/facebook/230/information-source_2139.png" alt=""/></span></div>
                <p id="subtitle">S'informer sur la désinformation</p>
            </header>
            {(loading && !informationMode) &&
                <Loader/>
            }
            {!informationMode &&
                <Definition
                    count={count}
                    setCount={setCount}
                    loading={loading}
                    setLoading={setLoading}
                />
            }
            {informationMode &&
                <Information setInformationMode={setInformationMode}/>
            }
        </>
    );
}

export default App;

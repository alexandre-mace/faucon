import './App.css';
import React, {useEffect, useState} from "react";
import Definition from "./ui/components/Definition";
import Loader from "./ui/components/Loader";

function App() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

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
            {loading &&
                <Loader/>
            }
            <Definition
                count={count}
                setCount={setCount}
                loading={loading}
                setLoading={setLoading}
            />
        </>
    );
}

export default App;

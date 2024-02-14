import {useEffect, useState} from 'react'
import './App.css'
import Loader from "./components/Loader.jsx";
import Definition from "./components/Definition.jsx";
import Information from "./components/Information.jsx";

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
              <div className={"count"}><span>{count}</span> sujets étudiés. <span className={"information"}><img onClick={() => setInformationMode(true)} src="https://em-content.zobj.net/source/apple/354/information_2139-fe0f.png" alt=""/></span></div>
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
  )
}

export default App

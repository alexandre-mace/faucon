import React from 'react';
import Typing from "react-typing-animation";

const Loader = () => {
    return (
        <div className={"loader"}>
            <Typing loop={true}>
                Faucon
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={6} />
                <Typing.Delay ms={200} />
            </Typing>
        </div>
    )
}
export default Loader;
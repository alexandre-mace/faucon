import {TypeAnimation} from "react-type-animation";

const Loader = () => {
    return (
        <div className={"loader"}>
            <TypeAnimation
                sequence={[
                    'Faucon',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    '',
                    200,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    )
}
export default Loader;
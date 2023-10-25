// import React from "react";
import { useState } from "react";

export default function Timer(props) {
    // const stateResult = React.useState();
    // stateResult[0] --> value
    // stateResult[1] --> function

    // const [seconds, setSeconds] = React.useState(props.start);
    const [seconds, setSeconds] = useState(props.start);

    if (seconds >= 60) {
        setSeconds(0);
    }

    setTimeout(() => {
        // setSeconds(seconds + 1);
        setSeconds((state) => state + 1);
    }, 1000)

    return (
        <div>
            Time: {seconds} s
        </div>
    );
}
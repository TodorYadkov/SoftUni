import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 1:
            return { shoot: 'First Blood', soundPath: '/sounds/first-blood-counter-strike-1.mp3' };
        case 2:
            return { shoot: 'Double Kill', soundPath: '/sounds/double-kill.mp3' };
        case 3:
            return { shoot: 'Triple Kill', soundPath: '/sounds/triple-kill.mp3' };
        case 4:
            return { shoot: 'Multi Kill', soundPath: '/sounds/multikill.mp3' };
        case 5:
            return { shoot: 'Unstoppable', soundPath: '/sounds/unstoppable.mp3' };
        default:
            return { shoot: 'Counter', soundPath: '/sounds/mk3-09280.mp3' };
    }
}

export default function Counter(props) {
    const [counter, setCounter] = useState(0);

    const incrementCounterHandler = (event) => {
        setCounter(oldCounter => oldCounter + 1);
    };

    const decrementCounterHandler = (event) => {
        setCounter(oldCounter => oldCounter - 1);
    };

    const clearCounterHandler = () => {
        setCounter(0);
    }

    return (
        <div>
            <p style={{ color: `#FF00${10 * counter}` }}>
                {counter > 5 ? 'Godlike' : getTitle(counter).shoot}: {counter}
            </p>
            <audio src={counter > 5 ? '/sounds/godlike.mp3' : getTitle(counter).soundPath} autoPlay></audio>
            <button onClick={decrementCounterHandler}>-</button>
            {props.canReset && <button onClick={clearCounterHandler}>0</button>}
            {
                counter < 10
                    ? <button onClick={incrementCounterHandler}>+</button>
                    : null
            }
        </div >
    );
}
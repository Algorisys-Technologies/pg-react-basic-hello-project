import { useState } from "react";

export default function Counter() {
    const [counter, setState] = useState(0); //return value and setterFunction
    const [error, setError] = useState("");

    const incr = () => {
        if (counter >= 10) {
            setError("Counter should not be greater than 10.");
            return;
        } else if (error.trim() !== "") {
            setError("")
        }
        setState(counter + 1);
    }

    const decr = () => {
        if (counter === 0) {
            setError("Counter should not be negative!");
            return;
        } else {
            setError("");
        }
        setState(counter - 1);
    }

    // function incre() {
    //     setState(counter + 1);
    // }

    return (
        <div>
            <h2>Counter</h2>
            {
                error.length > 0 && <div className="error">{error}</div>
            }
            <h2>{counter}</h2>
            <button onClick={incr}>+</button>
            <button onClick={decr}>-</button>
            <button onClick={function () {
                return setState(counter + 2)
            }}>++</button>
        </div>
    )
}
import { useState } from "react";
import Circle from "./Circle";

function App() {
    const [counter, setCounter] = useState<number | string>(1);
    setCounter(2);
    setCounter("hello world!");

    return (
        <div>
            <Circle bgColor="teal" borderColor="#000" />
            <Circle bgColor="tomato" text="i'm here" />
        </div>
    );
}

export default App;

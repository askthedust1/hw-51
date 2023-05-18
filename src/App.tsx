import React, {useState} from 'react';
import Numbers from "./Numbers/Numbers";
import './App.css';

const App = () => {
    const [lotto, setLotto] = useState<number[]>([]);

    const makeNumbers = () => {
        const numArr: number[] = [];

        while (numArr.length < 5) {
            let random = Math.floor(Math.random() * 32) + 5;
            if (!numArr.includes(random)) {
                numArr.push(random);
            }
        }

        numArr.sort(( a, b ) =>  a - b);
        setLotto(numArr);
    }

    return (
        <div className="App">
            <h1>Lottery Number Generator</h1>
            <Numbers num={lotto}/>
            <button onClick={makeNumbers}>New numbers</button>
        </div>
    );
};

export default App;

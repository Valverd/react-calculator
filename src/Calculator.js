import React, { useState } from "react";
import './Calculator.css';
import Buttons from "./components/Buttons";
import Display from "./components/Display";


function Calculator(props) {

    const [displayTop, setDisplayTop] = useState('');
    const [displayBottom, setDisplayBottom] = useState('');

    function positiveNegative() {
        if (displayBottom.indexOf("-") === -1) {
            setDisplayBottom("-" + displayBottom);
        } else {
            let clearNegative = displayBottom.substring(1);
            setDisplayBottom(clearNegative);
        }
    }


    function clearNumber() {
        let erased = displayBottom.substring(1);
        setDisplayBottom(erased);
    }


    function clearDisplayBottom() {
        setDisplayBottom('');
    }

    function clearAll() {
        setDisplayTop('');
        setDisplayBottom('');
    };

    function result() {
        let equal = displayTop + displayBottom;
        let count = eval(equal).toString();
        setDisplayBottom(count);
        setDisplayTop('');
    };

    function getOperations(e) {
        if (displayBottom !== '') {
            let target = e.target.value;
            setDisplayTop(displayTop + displayBottom + target);
            setDisplayBottom('');
        };
    };

    function getComma() {
        if (displayBottom !== '') {
            if (displayBottom.indexOf(".") === -1) {
                setDisplayBottom(displayBottom + ".");
            }
        }
    }

    function getNumbers(e) {
        let target = e.target.value;
        setDisplayBottom(displayBottom + target);
    };


    return (

        <section className="container">
            <h1 className="title">Calculadora React</h1>
            <div className="bodyCalculator">

                <Display displayTop={displayTop} displayBottom={displayBottom}></Display>
                <Buttons getComma={getComma} positiveNegative={positiveNegative} clearNumber={clearNumber} clearDisplayBottom={clearDisplayBottom} clearAll={clearAll} result={result} getOperations={getOperations} getNumbers={getNumbers}></Buttons>

            </div>
        </section>

    )

}

export default Calculator;
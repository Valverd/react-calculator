function Buttons(props) {
    return (
        <div className="btns">
            <div className="row">
                <button onClick={props.clearDisplayBottom} className="btn">CE</button>
                <button onClick={props.clearAll} className="btn">C</button>
                <button onClick={props.clearNumber} className="btn">X</button>
                <button value="/" onClick={props.getOperations} className="btn">/</button>
            </div>
            <div className="row">
                <button value="7" onClick={props.getNumbers} className="btn number">7</button>
                <button value="8" onClick={props.getNumbers} className="btn number">8</button>
                <button value="9" onClick={props.getNumbers} className="btn number">9</button>
                <button value="*" onClick={props.getOperations} className="btn">x</button>
            </div>
            <div className="row">
                <button value="4" onClick={props.getNumbers} className="btn number">4</button>
                <button value="5" onClick={props.getNumbers} className="btn number">5</button>
                <button value="6" onClick={props.getNumbers} className="btn number">6</button>
                <button value="-" onClick={props.getOperations} className="btn">-</button>
            </div>
            <div className="row">
                <button value="1" onClick={props.getNumbers} className="btn number">1</button>
                <button value="2" onClick={props.getNumbers} className="btn number">2</button>
                <button value="3" onClick={props.getNumbers} className="btn number">3</button>
                <button value="+" onClick={props.getOperations} className="btn">+</button>
            </div>
            <div className="row">
                <button onClick={props.positiveNegative} className="btn">+/-</button>
                <button value="0" onClick={props.getNumbers} className="btn number">0</button>
                <button onClick={props.getComma} className="btn">,</button>
                <button onClick={props.result} className="btn">=</button>
            </div>

        </div>

    )
}

export default Buttons;
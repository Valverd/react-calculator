function Display(props){

    return(
        <div className="display">
            <div className="display-top">
                <p>{props.displayTop}</p>
            </div>
            <div className="display-bottom">
                <p>{props.displayBottom}</p>
            </div>
        </div>
    )

};

export default Display;
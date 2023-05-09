import React, { useState } from "react";
import defaultAnswers from "./answers.json";
import { choice } from "./random";
import "./EightBall.css";

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a question",
        color: 'black'
    })
    function handleClick(evt) {
        setAnswer(choice(answers))
    }
    const restart = () => {
        setAnswer({
            msg: "Think of a question",
            color: 'black'
        })
    }
    return (
        <div>
            <div className="EightBall" onClick={handleClick} style={{ backgroundColor: answer.color }}>
                <b>{answer.msg}</b>

            </div>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default EightBall;



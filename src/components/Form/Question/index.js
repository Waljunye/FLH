import React, {useEffect, useState} from "react";

function LifeSituation(props){
    const [questionChecked, setQuestion] = useState()
    const [isPositiweAnswer, setAnswer] = useState()
    const onHandle = (el) => {
        setQuestion(el.target.id)
        setAnswer(el.target.id.includes("yes"))
    }
    useEffect(() => {
        console.log(isPositiweAnswer)
    })
    return(
        <div>
            <label htmlFor={"yes-" + props.id}>{props.text}</label>
            <input
                type="checkbox"
                id={"yes-" + props.id}
                checked={questionChecked === ("yes-" + props.id)}
                onChange={onHandle}
            />

        </div>
    )
}

export default LifeSituation;
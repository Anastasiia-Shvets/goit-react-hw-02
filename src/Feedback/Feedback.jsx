import React from "react"
const Feedback = ({ values }) => {
    return (
        <div>
            <p>Good: {values.good}</p>
            <p>Neutral: {values.neutral}</p>
            <p>Bad: {values.bad}</p>
        </div>
    )
}
export default Feedback
const Feedback = ({ values, totalFeedback, positivePercentage }) => {

    return (
        <div>
            <p>Good: {values.good}</p>
            <p>Nautral: {values.neutral}</p>
            <p>Bad: {values.bad}</p>
            <p>Total Feedback: {totalFeedback}</p>
            <p>Positive Percentage: {positivePercentage}%</p>
        </div>
    )
}

export default Feedback
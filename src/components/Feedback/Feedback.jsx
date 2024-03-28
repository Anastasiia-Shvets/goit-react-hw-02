const Feedback = ({ values }) => {
    const totalFeedback = values.good + values.neutral + values.bad;
    const positivePercentage = totalFeedback === 0 ? 0 : Math.round((values.good / totalFeedback) * 100);

    return (
        <div>
            <p>Good: {values.good}</p>
            <p>Nautral: {values.neutral}</p>
            <p>Bad: {values.bad}</p>
            <p>Total Feedback: {values.good + values.neutral + values.bad}</p>
            <p>Positive Percentage: {positivePercentage}%</p>
        </div>
    )
}

export default Feedback
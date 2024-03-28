const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    const handleFeedback = type => {
        updateFeedback(type);
    };

    return (
        <div>
            <button onClick={() => handleFeedback('good')}>Good</button>
            <button onClick={() => handleFeedback('neutral')}>Neutral</button>
            <button onClick={() => handleFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button> }
        </div>
    );
};



export default Options

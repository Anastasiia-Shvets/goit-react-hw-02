import { useState, useEffect } from 'react'
import './App.css'
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Natification/Notification';


function App() {

  const [values, setValues] = useState(() => {
    const storedData = localStorage.getItem('feedbackData');
    return storedData ? JSON.parse(storedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positivePercentage = Math.round((values.good / totalFeedback) * 100) || 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback values={values} positivePercentage={positivePercentage} /> : <Notification message="No feedback yet." />}
    </div>
  );
}

export default App

import { useState } from 'react'
import './App.css'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import Notification from './Notification/Notification'

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const totalFeedback = values.good + values.neutral + values.bad;
  const [showFeedback, setShowFeedback] = useState(false);

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    })
    setShowFeedback(true);
  }

  return (
     <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? <Feedback values={values} /> : <Notification message="No feedback yet" />}
    </div>
  )
}

export default App

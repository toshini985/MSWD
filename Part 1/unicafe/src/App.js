import React,{ useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const FeedbackButton = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const FeedbackDisplay = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const FeedbackStats = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all
  const positivePercent = positive * 100 + ' %'

  if (all === 0) {
    return 'No feedback given'
  } else {
    return (
      <table>
        <tbody>
          <FeedbackDisplay text='good' value={good} />
          <FeedbackDisplay text='neutral' value={neutral} />
          <FeedbackDisplay text='bad' value={bad} />
          <FeedbackDisplay text='all' value={all} />
          <FeedbackDisplay text='average' value={average} />
          <FeedbackDisplay text='positive' value={positivePercent} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <FeedbackButton handleClick={() => setGood(good + 1)} text='good' />
      <FeedbackButton handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <FeedbackButton handleClick={() => setBad(bad + 1)} text='bad' />

      <Header text='statistics' />
      <FeedbackStats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

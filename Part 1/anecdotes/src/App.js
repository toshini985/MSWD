import React, { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <div>
        {text}
      </div>
      <div>
        has {votes} votes
      </div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const newVotes = (selected) => {
    const newVotes = [...votes]
    newVotes[selected] += 1

    return () => setVotes(newVotes)
  }

  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={newVotes(selected)} text='vote' />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
      
      <Header text='Anecdote with most votes' />
      <Anecdote text={anecdotes[mostVotes]} votes={votes[mostVotes]} />
    </div>
  )
}

export default App

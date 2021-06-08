import React from 'react'

const Header = ({ course }) => {
  return <h2>{course.name}</h2>
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part part={part} key={part.id} />
      )}
    </div>
  )
}

const Total = ({ parts }) => {
  const numExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <p><b>total of {numExercises} exercises</b></p>
}

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map(course =>
        <div key={course.id}>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Courses
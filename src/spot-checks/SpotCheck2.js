import React, { useState } from 'react'

export default function SpotCheck2() {
 
  const [isLoading, setIsLoading] = useState(true)
  const [lesson, setLesson] = useState({ name: 'React Hooks', completed: false, started: false })

  const updateLesson = key => setLesson({ ...lesson, [key]: true })

  return (
    <div>
        {isLoading ? <div>Page is loading...</div> : (
            <div>
              <p>{lesson.name}</p>
              <p>Lesson status: {lesson.completed ? 'Completed' : lesson.started ? 'In progress' : 'Not started'}</p>
              <button onClick={() => updateLesson('started')}>Begin Lesson</button>
              <button onClick={() => updateLesson('completed')}>Complete Lesson</button>
            </div>
        )}
    </div>
  )
}
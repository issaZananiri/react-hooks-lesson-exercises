import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    document.title = `You have ${likes} likes`
  })

  return (
    <div className="ex-space">
        <p>My shoobi doobi post</p>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  )
}
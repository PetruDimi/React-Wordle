import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch("https://react-http-requests-b1189-default-rtdb.europe-west1.firebasedatabase.app/alphabetLetters.json")
      .then(res => res.json())
      .then(json => {
        const letters = json[Object.keys(json)]
        setLetters(letters)
      })
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}

import React, { useState } from 'react'

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: "Rashad Nelson",
    age: 42,
    location: "Montclair, NJ"
  })

  const toggleLocation = () => {
    if (person.location === "Newark, NJ") {
      setPerson({ ...person, location: "Atlanta, GA" })
    }
    else {
      setPerson({ ...person, location: "Newark, NJ" })
    }

  }

  return (
    <section>
      <h3>{person.name}</h3>

      <h3>{person.age}</h3>

      <h3>{person.location}</h3>

      <button type="button" className="btn" onClick={() => toggleLocation()}>Toggle Location</button>
    </section>
  )
}

export default UseStateObject

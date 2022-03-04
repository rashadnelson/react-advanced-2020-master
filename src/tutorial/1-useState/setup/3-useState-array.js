import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {

  const [ people, setPeople ] = useState(data)

  const removePerson = (id) => {
    let removedPerson = people.filter((person) => person.id !== id)
    setPeople(removedPerson)
  }

  return (
    <section>
      {people.map((person) => {
        const { id, name } = person
        return(
          <section
            key={id}
            className="item"
          >
            <h4>{name}</h4>

            <button type="button" className="btn" onClick={() => removePerson(id)}>Remove Person</button>
          </section>
        )
      })}
      < button type="button" className="btn" onClick={() => setPeople([])}>Clear Items</button>
    </section>
  )
}

export default UseStateArray

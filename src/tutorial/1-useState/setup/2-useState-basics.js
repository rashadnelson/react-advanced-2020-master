import React, { useState } from 'react'

const UseStateBasics = () => {

    const [ text, setText ] = useState("Default Text")

    const toggleHandler = () => {
        if( text === "Default Text") {
            setText("New Text")
        }
        else {
            setText("Default Text")
        }
    }

    return (
        <section>
            <h3>{text}</h3>

            <button type="button" className="btn" onClick={toggleHandler}>Toggle Button</button>
        </section>
    )
}

export default UseStateBasics


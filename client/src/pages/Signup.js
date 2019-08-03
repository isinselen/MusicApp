import React, { useState } from "react";
import API from "../utils/API";


const Signup = () => {
    const [name, setName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log("here")
        API.createUser(name)
        .then(user => {
            console.log('Got newly created user in component', user)
            localStorage.setItem('userId', user.data._id)
            window.location = '/'
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input onChange={event => setName(event.target.value)} placeholder="Name" />
            <button type="submit" > Submit </button>
        </form>
    )
}

export default Signup;
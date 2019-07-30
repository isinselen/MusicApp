import React, { useState } from "react";
import API from "../utils/API";


const Signup = () => {
    const [name, setName] = useState("")

    const handleSubmit = () => {
        API.createUser(name)
        .then(userId => {
            localStorage.setItem('userId', userId)
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
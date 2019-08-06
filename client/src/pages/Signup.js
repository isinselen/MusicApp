import React, { useState } from "react";
import API from "../utils/API";
import {withRouter} from 'react-router'

const Signup = ({ history }) => {
    const [name, setName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        API.createUser(name)
        .then(user => {
            console.log('Got newly created user in component', user)
            localStorage.setItem('userId', user.data._id)
            history.push('/')
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input onChange={event => setName(event.target.value)} placeholder="Name" />
            <button type="submit" > Submit </button>
        </form>
    )
}

export default withRouter(Signup)
import React, { useState } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import API from "../utils/API";


class Home extends React.Component {
    state = {
        loaded:false, 
        searches:[]
    };

    componentDidMount(){
        const userId = localStorage.getItem("userId");
        if (userId){
            API.getUser(userId)
            .then(user => {
                console.log(user)
                this.setState({loaded: true, searches:user.searches})
            })
        } else{
            window.location = '/signup'
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <Jumbotron />
            </div>
        )

    }
}

export default Home;
import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import API from "../utils/API";

class Home extends React.Component {
    state = {
        loaded: false,
        user: null
    };

    componentDidMount() {
        const userId = localStorage.getItem("userId");
        if (userId) {
            API.getUser(userId)
                .then(user => {
                    console.log('Got existing user in component', user)
                    this.setState({ loaded: true, user: user.data })
                })
        } else {
            window.location = '/signup'
        }
    }
    updateSearches(Artist) {
        let currentSearches = [...this.state.user.searches]
        currentSearches.push(Artist)
        let updatedUser = { ...this.state.user }
        updatedUser.searches = currentSearches
        this.setState({ user: updatedUser })
        console.log(this.state.user.searches)
    }
    render() {
        return (
            <div>
                {
                    console.log('this.state.user.searches', this.state.user && this.state.user.searches)
                }
                <Nav />
                <Jumbotron user={this.state.user} updateSearches={() => this.updateSearches.bind(this)} />
            </div>
        )

    }
}

export default Home;
import React, { useState } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"


class Home extends React.Component {
    state = {
        home: []
    };

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
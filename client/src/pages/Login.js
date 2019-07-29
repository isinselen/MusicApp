import React, { useState } from "react";


class Login extends React.Component {
    state = {
        login: []
    };

    render() {
        return (
            <div>
                <input placeholder = "Username" />
                <input placeholder = "Password" />
            </div>
        )

    }
}

export default Login;
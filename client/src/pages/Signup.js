import React, { useState } from "react";


class Signup extends React.Component {
    state = {
        signup: []
    };

    render() {
        return (
            <div>
                <input placeholder = "Create Username" />
                <input placeholder = "Create Password" />
            </div>
        )

    }
}

export default Signup;
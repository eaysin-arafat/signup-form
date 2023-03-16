import React from "react";
import SignUp from './Component/SignUp/SignUp.js';


class App extends React.Component {

    state = {
        users: []
    }

    createUser = (user) => {
        user.id = new Date().getTime().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    }

    render() {
        return(
            <div>
                <h1>Signup Form</h1>
                <hr />    
                <SignUp createUser={this.createUser} />
                <div>
                    <h3 className="my-3">ALL REGISTERD USERS</h3>
                    <ul className="list-group">
                        {this.state.users.map(user => (<li key={user.id} className='list-group-item'>
                            {user.name} : {user.email}
                        </li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App
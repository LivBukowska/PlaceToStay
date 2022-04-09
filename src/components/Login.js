import React, {Component} from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password:'',
            link: 'Register',
            submit: 'react'
        }
    }

    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    } 

    handleLinkChange = event => {
        this.setState({
            link: event.target.value
        })
    } 

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.password} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                     <label>Username</label>
                     <input type='text' value={this.state.username} onChange={this.handleUserNameChange}/>
                </div>
                    <div>
                        <label>Password</label>
                        <input type= 'password' value={this.state.comments} onChange={this.handlePasswordChange}></input>
                    </div>
                    <div>
                        <button type="e-link">Register</button>
                    </div>
                    <div>
                        <button type='submit' value={this.handleSubmit}>Submit</button>
                    </div>
            </form>
        )
    }
}
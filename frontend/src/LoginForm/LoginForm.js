import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password:""
    };
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  usernameHandler(event) {
    this.setState({
      username: event.target.value,
    });
    console.log(event.target.value);
  }

  passwordHandler(event) {
    this.setState({
      password: event.target.value,
    });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <form method="POST" className="details" onSubmit={this.handleSubmit}>
          <div className="formControl">
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameHandler}
              placeholder="username"
            />
          </div>
          <div className="formControl">
            <input
              type="password"
              value={this.state.password}
              onChange={this.passwordHandler}
              placeholder="password"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;

import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
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
        <Paper variant="outlined" square>
          <form method="POST" className="details" onSubmit={this.handleSubmit}>
            <div className="form__control">
              <TextField
                label="username"
                variant="outlined"
                value={this.state.username}
                onChange={this.usernameHandler}
              />
            </div>
            <div className="form__control">
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={this.state.password}
                onChange={this.passwordHandler}
              />
            </div>

            <div className="formControl">
              <Button type="submit" variant="contained" color="primary" disableElevation>
                submit
              </Button>
            </div>
          </form>
        </Paper>
      </React.Fragment>
    );
  }
}

export default LoginForm;

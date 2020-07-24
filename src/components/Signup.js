import React from "react";
import { Link, withRouter } from "react-router-dom";

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleInput = ({ target: { name, value } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = (state) => {
    console.log("we are in");
    const signUpUrl = "https://conduit.productionready.io/api/users";
    fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: state }),
    })
      .then((res) => {
        console.log(res, "here");
        if (res.status === 200) {
          this.props.history.push("/");
        }
      })
      .catch((error) => console.log(error, "error is here"));
  };
  render() {
    const { username, email, password } = this.state;
    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <Link className="link link2" to="/Signin">
          Have an acoount ?
        </Link>
        <div className="form">
          <input
            onChange={this.handleInput}
            type="text"
            name="username"
            value={username}
            placeholder="Username"
          />
          <input
            onChange={this.handleInput}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
          />
          <input
            onChange={this.handleInput}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
          <button
            onClick={() => this.handleSubmit(this.state)}
            className="sign-btn"
          >
            Sign up
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);

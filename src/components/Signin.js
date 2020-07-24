import React from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

export default class Signin extends React.Component {
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
    const signInUrl = "https://conduit.productionready.io/api/users/login";
    fetch(signInUrl, {
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
    const { email, password } = this.state;
    return (
      <div className="form-container">
        <h1>Sign In</h1>
        <Link className="link link2" to="/Signup">
          Need an acoount ?
        </Link>
        <div className="form">
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
            className="sign-btn"
            onClick={() => this.handleSubmit(this.state)}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Signin from "./Signin";
import Signup from "./Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null,
      tags: null,
      tagname: null,
    };
  }
  componentDidMount() {
    const url =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    const url2 = "https://conduit.productionready.io/api/tags";
    const promise1 = fetch(url)
      .then((res) => res.json())
      .then((data) => data.articles);
    const promise2 = fetch(url2)
      .then((res) => res.json())
      .then((data) => data.tags);
    Promise.all([promise1, promise2]).then((values) =>
      this.setState({ feed: values[0], tags: values[1] })
    );
  }
  handleTag(tag) {
    if (tag === "global") {
      var tagUrl =
        "https://conduit.productionready.io/api/articles?limit=10&offset=0";
      this.setState({ tagname: "" });
    } else {
      this.setState({ tagname: tag });
      tagUrl = `https://conduit.productionready.io/api/articles?tag=${tag}&limit=10&offset=0`;
    }
    fetch(tagUrl)
      .then((res) => res.json())
      .then((data) => this.setState({ feed: data.articles }));
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route
            path="/"
            render={() => (
              <Main
                feed={this.state.feed}
                tags={this.state.tags}
                tagname={this.state.tagname}
                handle={(tag) => this.handleTag(tag)}
              />
            )}
            exact
          />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route component={Error} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

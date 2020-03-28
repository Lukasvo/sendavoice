import React, { Component } from "react"
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import logo from "./logo.svg"
import "./App.css"

import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <LambdaDemo />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

export default App

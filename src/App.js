import React  from "react"
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Charities from './components/Charities';
import ApolloClient from "apollo-boost";
import "./App.css"

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Charities />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

export default App

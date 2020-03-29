import React  from "react"
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import "./App.css"
import Logo from './components/Logo';
import ShadowIcon from './components/ShadowIcon';
import bubbleSpeak from './img/bubble-speak.svg';
import handWash from './img/hand-wash.svg';
import phone from './img/phone.svg';
import Container from '@material-ui/core/Container';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import theme from "./theme";
import Welcome from './components/Welcome';

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Container maxWidth="lg">
        <Logo />

        <Welcome />
      </Container>
    </ApolloProvider>
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));

export default App

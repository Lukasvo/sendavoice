import React  from "react"
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import "./App.css"
import Logo from './components/Logo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import Welcome from './components/Welcome';
import Record from './components/Record';
import Charities from './components/Charities';

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

const App = () => {
  const menu = [
    {
      path: '/',
      component: Welcome,
    },
    {
      path: '/record',
      component: Record,
    },
    {
      path: '/charities',
      component: Charities,
    },
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <ApolloProvider client={client}>

        <Router>
          <Container maxWidth="lg">
            <Logo/>
            <Switch>
              {menu.map(({ path, component }) => {
                const Component = component;

                return (<Route key={`m-${path}`}
                               exact path={path}
                               render={props => <Component {...props}
                                                           componentKey={path}
                               />
                               }/>);
              })}
              />
            </Switch>
          </Container>
        </Router>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

render(<App />, document.getElementById('root'));

export default App

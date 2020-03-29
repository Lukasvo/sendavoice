import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Logo from './components/Logo';
import Welcome from './components/Welcome';
import Record from './components/Record';
import Charities from './components/Charities';
import Amount from './components/Amount/Amount';
import Thanks from './components/Thanks/Thanks';
import './App.css';

const App = () => {
  const menu = [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/record',
      component: Record
    },
    {
      path: '/charities',
      component: Charities
    },
    {
      path: '/amount',
      component: Amount
    },

    {
      path: '/thanks',
      component: Thanks
    }
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Container maxWidth='lg'>
          <Logo />
          <Switch>
            {menu.map(({ path, component }) => {
              const Component = component;

              return (
                <Route
                  key={`m-${path}`}
                  exact
                  path={path}
                  render={props => (
                    <Component {...props} componentKey={path} />
                  )}
                />
              );
            })}
            />
          </Switch>
        </Container>
      </Router>
    </MuiThemeProvider>
  );
};

render(<App />, document.getElementById('root'));

export default App;

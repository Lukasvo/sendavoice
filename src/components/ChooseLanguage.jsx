import React  from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import color from 'color';
import {createUseStyles} from 'react-jss'
import Box from '@material-ui/core/Box';

const useStyles = createUseStyles({
  item: {
    boxShadow: '0 3px 30px #00000029',
    fontFamily: 'Montserrat, sans-serif',
    borderRadius: 20,
    padding: 20,
    textAlign: 'center',
    background: '#fff',
    transition: '.3s',
    fontSize: 44,
    fontWeight: 600,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 3px 30px ' + color('#766DFE').lighten(.25).hex(),
    }
  },
});

const ChooseLanguage = ({ setLanguage, language }) => {
  const classes = useStyles();

  const chooseLanguage = ({ currentTarget }) => {
    setLanguage(currentTarget.dataset.id);
  };

  const activeStyles = (id) => language === id ? { boxShadow: '0 3px 30px #766DFE' } : {};

  const languages = [
    {
      id: 'fr',
      label: 'Français'
    },
    {
      id: 'nl',
      label: 'Nederlands'
    },
    {
      id: 'en',
      label: 'English'
    },
  ];

  return <>
    <h1>In which language would you like to send a message?</h1>

    <Grid container spacing={5} className={classes.ul} style={{ marginBottom: 100, marginTop: 35 }}>
      {languages.map(({id, label}) => <Grid item
                                            xs={12}
                                            md={4}
                                            key={id}>
        <Box data-id={id}
             onClick={chooseLanguage}
             className={classes.item}
             style={activeStyles(id)}>{label}</Box>
      </Grid>)}
    </Grid>

    <div style={{ textAlign: 'center' }}>
      <Button
        color="primary"
        component={Link}
        to="/record">Send a voice now !</Button>
    </div>
  </>
};

export default ChooseLanguage;

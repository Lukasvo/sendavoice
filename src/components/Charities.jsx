import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

const { REACT_APP_CHARITIES: charities } = process.env;

const Charities = () => {
  const [selectedCharity, setSelectedCharity] = useState();

  const selectCharity = ({ currentTarget }) => {
    setSelectedCharity(currentTarget.dataset.id);
  };

  const activeStyles = (_id) => selectedCharity === _id ? {boxShadow: '0 3px 30px #766DFE'} : {};

  const styles = {
    item: {
      boxShadow: '0 3px 30px #00000029',
      borderRadius: 20,
      display: 'flex',
      padding: 0,
      background: '#fff',
      transition: '.3s'
    },
    img: {
      borderRadius: '20px 0 0 20px',
      backgroundSize: 'cover',
      flexBasis: 200,
      flexGrow: 0,
      flexShrink: 0,
      minHeight: 257,
      height: '100%',
    },
    box: {
      padding: '57px 27px'
    },
    h2: {
      textAlign: 'left',
      margin: 0,
      fontSize: 18,
      fontWeight: 600
    },
    p: {
      fontWeight: 300,
    }
  };

  return <>
    <h1>Select the charity you want to donate to</h1>
    <Grid container spacing={3}>
      {
        JSON.parse(charities).map(({ _id, title, image, description, url }) => (
          <Grid item xs={12} md={4} key={_id} onClick={selectCharity} style={{ ...styles.item, ...activeStyles(_id) }} data-id={_id}>
            <Box style={{...styles.img, backgroundImage: 'url(' + image + ')'}}/>
            <Box style={styles.box}>
              <h2 style={styles.h2}>{ title }</h2>
              <p style={styles.p}>{ description }</p>
              <p>{ url }</p>
            </Box>
          </Grid>
        ))
      }
    </Grid>
  </>
};

export default Charities;

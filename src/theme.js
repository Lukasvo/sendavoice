import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiContainer: {
      root: {
        paddingTop: 36
      }
    },
    MuiButton: {
      root: {
        backgroundSize: '200% auto',
        transition: '0.5s',
        background:
          'linear-gradient(to right, #B721FF 0%, #3CB3FD 40%, #21D4FD 51%, #3CB3FD 60%, #B721FF 100%)',
        boxShadow: '0 3px 30px #00000029',
        borderRadius: 100,
        '&:hover': {
          backgroundPosition: 'right center'
        }
      },
      text: {
        padding: '20px 43px'
      },
      label: {
        fontSize: 28,
        color: '#fff',
        textTransform: 'none',
        letterSpacing: 0
      }
    }
  }
});

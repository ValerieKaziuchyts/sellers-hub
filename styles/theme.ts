import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#357EFE',
      dark: '#1760E1',
      light: '#357EFE',
    },
    secondary: {
      main: '#313e49',
      dark: '#dc5800',
      light: '#faa731',
    },
    error: {
      main: '#e30b17',
    },
    warning: {
      main: '#dc5800',
    },
    info: {
      main: '#3e77b0',
    },
    success: {
      main: '#25ae88',
    },
    text: {
      primary: '#232727',
      secondary: '#151618',
      disabled: '#AEAEB2',
    },
    background: {
      default: '#f8f8f8',
      paper: '#fff',
    },
  },
  typography: {
    h3: {
      fontSize: '22px',
      lineHeight: '56px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontSize: '22px',
      lineHeight: '26px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '20px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '18px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 300,
    },
    button: {
      fontSize: '16px',
      lineHeight: '18px',
      textTransform: 'capitalize',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 600,
    },
    body2: {
      fontSize: '14px',
      lineHeight: '24px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 300,
    },
    caption: {
      fontSize: '12px',
      lineHeight: '20px',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 250,
    },
  },
});

export default theme;

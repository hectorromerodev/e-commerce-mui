import { createTheme } from '@mui/material/styles';

export const Colors = {
  // Brand Colors
  primary: '#dc95a5',
  
  // Color palette
  secondary: '#7674d1',
  accent: '#305dfc',
  complement: '#f29d7a',
  success: '#00c853',
  warning: '#ffab00',
  error: '#d50000',
  info: '#00b0ff',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2f3d4a',
  shaft: '#333',
  // grayscale colors
  dim_gray: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_gray: "rgb(230, 230, 230)",
  // SOlid colors
  white: '#fff',
  black: '#000',
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
    }
  },
});

export default theme;
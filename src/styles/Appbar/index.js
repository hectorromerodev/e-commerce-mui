import { Box, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../theme';
import "@fontsource/montez"

// Container
export const AppbarContainer = styled(Box)(() => {
  return {
    display: 'flex',
    marginTop: '1rem',
    alignItems: 'center',
    padding: '.2rem .8rem',
  };
})

// Header
export const AppbarHeader = styled(Typography)(() => {
  return {
    padding: '.2rem',
    flexGrow: '1',
    fontFamily: '"Montez", cursive',
    fontSize: '3rem',
    color: Colors.primary,
  };
});

// List
export const AppbarList = styled(List)(({type}) => {
  return {
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: '3',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

// Action Icon Container
export const ActionIconsContainerDesktop = styled(Box)(() => {
  return {
    flexGrow: '0',
  }
});

export const ActionIconsContainerMobile = styled(Box)(() => {
  return { 
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    alignItems: 'center',
    zIndex: '99',
    borderTop: `1px solid ${Colors.border}`,
  }
});
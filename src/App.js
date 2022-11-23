import { ThemeProvider } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';

import theme from './styles/theme';

// COmponents
import Appbar from './components/Appbar';

function App() {
  useEffect(() => {
    document.title = 'React Material UI - Home';
  }, []);
 
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#FFF',
        }}
      >
        <Appbar />
        {
          // 1. Add app bar
          // 2. Add Hero section
          // 3. Add Promotion banner
          // 4. Add Title
          // 5. Add Products
          // 6. Add Footer
          // 7. Add Search Box
          // 8. Add Drawer
        }
        <Button>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;

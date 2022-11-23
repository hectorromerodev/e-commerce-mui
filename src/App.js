import { Button, Container } from '@mui/material';
import { useEffect } from 'react';

import './App.css';

function App() {
  useEffect(() => {
    document.title = 'React Material UI - Home';
  }, []);

  return (
    <Container
      maxWidth="xl"
    >
      <Button>Test</Button>
    </Container>
  );
}

export default App;

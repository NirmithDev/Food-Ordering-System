import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import darkTheme from './Theme/DarkTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar></Navbar>
    </ThemeProvider>
  );
}

export default App;

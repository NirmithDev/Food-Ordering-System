import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import darkTheme from './Theme/DarkTheme';
import { Home } from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      <RestaurantDetails/>
    </ThemeProvider>
  );
}

export default App;

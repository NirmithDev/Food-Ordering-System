import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import darkTheme from './Theme/DarkTheme';
import { Home } from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      {/*<RestaurantDetails/>*/}
      <Cart></Cart>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import TopNavBar from './Components/TopNavBar';
import LogoNavBar from './Components/LogoNavBar';
import RedirectNavBar from './Components/RedirectNavBar';
import Banner from './Components/Banner';
import SearchBar from './Components/SearchBar';
import Products from './Components/Products';
import Grocery from './Components/Grocery';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <LogoNavBar />
      <RedirectNavBar />
      <Banner />
      <SearchBar />
      <Products />
      <Grocery />
    </div>
  );
}

export default App;

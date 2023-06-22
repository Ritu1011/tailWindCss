import logo from './logo.svg';
import './App.css';
import Experts from './Components/Experts';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Header from './Components/Header';
import NewsLetter from './Components/NewsLetter';
function App() {
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Experts></Experts>
    <NewsLetter></NewsLetter>
    <Cards/>
    </>
  );
}

export default App;

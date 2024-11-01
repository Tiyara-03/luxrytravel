import './App.css';
import InfoBar from './Components/InfoBar'
import Home from './Pages/Home'
import Cards from './Components/Cards';
import Slideimg from './Components/Slideimg';
import SeeDeal from './Components/SeeDeal';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <div>
       <InfoBar/> 
       <Home/>
       <Cards/>
       <SeeDeal/>
       <Slideimg/>
       <Footer/>
     </div>
    </>
  );
}

export default App;

import Cloths from "./App/Clothes/Clothes";
import Contact from "./App/Contact/Contact";
import Header from "./App/Header/Header";
import Navbar from "./App/Navigation/Navbar";
import Process from "./App/Process/Process";
import Story from "./App/Story/Story";
import './style.css'
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Cloths/>
      <Story/>
      <Process/>
      <Contact/> 
    </>
  );
}

export default App;

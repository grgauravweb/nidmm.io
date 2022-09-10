import './App.css';
import Nav from './components/Nav';
import Homebanner from './components/Homebanner';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Why from './components/Why';
import Form from './components/Form';
function App() {
  return (
    <div>
      <Nav/>
      <Homebanner/>
      <Cards/>
      <Why/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import About from './components/About';
import Companies from './components/Companies';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Companies />
      <About />
      <Featured />
      <Products />
      <Footer />
    </>
  );
}

export default App;

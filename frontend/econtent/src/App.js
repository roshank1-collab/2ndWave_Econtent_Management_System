
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import { BrowserRouter } from 'react-router-dom';
import Header from './header/header'
import Container from './Container/container'
import Footer from './footer/footer';
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
    
        <Header />
        <Container />
        <Footer/>

      </div>
    </BrowserRouter>
  );
}


export default App;
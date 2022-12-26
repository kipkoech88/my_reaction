import './App.css';
import { Article,Features, Footer,Header } from './components';
import { Navbar,Brand,Blog,Gallery } from './containers';

function App() {
  return (
    <div className="App">
      <div className='travel__bg'>
        <Navbar/>
        <Header/>
        <Article/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

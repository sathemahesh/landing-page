
import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/Event';
import Middle from './components/Middle';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Event/>
      <Middle/>
    </div>
  );
}

export default App;

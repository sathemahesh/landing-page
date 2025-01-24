
import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/Event';
import Middle from './components/Middle';
import Counter from './components/Counter';
// import TimeBaner from './components/TimeBaner';
  import Expected from './components/Expected';
import Knowladge from './components/Knowladge';


function App() {
  return (
    <div className="App">
      <Banner/>
      {/* <TimeBaner /> */}
      <Event/>
      
      <Middle/>
      <Counter />
      <Expected/>
      
      <Knowladge/>
      
    </div>
  );
}

export default App;

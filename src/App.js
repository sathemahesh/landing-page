
import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/Event';
import Middle from './components/Middle';
import Counter from './components/Counter';
// import TimeBaner from './components/TimeBaner';
function App() {
  return (
    <div className="App">
      <Banner/>
      {/* <TimeBaner /> */}
      <Event/>
      
      <Middle/>
      <Counter />

     
    </div>
  );
}

export default App;

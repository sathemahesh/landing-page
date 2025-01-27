
import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/Event';
import Middle from './components/Middle';
import Counter from './components/Counter';
// import TimeBaner from './components/TimeBaner';
  import Expected from './components/Expected';
import Knowladge from './components/Knowladge';
import Plans from './components/Plans';
import Events from './components/Events';

import Eventize from './components/Eventize';

import Sponser from './components/Sponser';
import Articles from './components/Articles';
import Location from './components/Location';
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
      <Plans />
      <Events />
      <Eventize />
      <Sponser />
      <Articles />
      <Location />
    </div>
  );
}

export default App;

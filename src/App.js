
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
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Banner/>
     
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
      <Footer />
    </div>
  );
}

export default App;

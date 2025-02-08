import Greetings from './Greeting';
import './App.css'
import Counter from './counter';
import ToggleText from './ToggleText';
import ItemList from './ItemList';

function App() {
  return (
    <div>
      <h1>Hei, React toimii!</h1>
      <Greetings name="Tommi"/>
      <Counter/>
      <ToggleText/>
      <ItemList/>
    </div>
  );
}

export default App;



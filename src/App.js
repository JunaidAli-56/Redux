import './App.css';
import store from './store';

function App() {

  store.subscribe(() => console.log(store.getState()))


  return (
    <div>
      <h1>Hello Jarviz</h1>
      <h4>React Redux</h4>
      <div>
        <button>-</button>
        <input name='quantity' type="text" />
        <button>+</button>
      </div>
    </div>
  );
}

export default App;

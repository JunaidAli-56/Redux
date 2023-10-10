import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Hello Jarviz</h1>
      <h4>React Redux</h4>
      <div>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <input name='quantity' type="text" value={myState} />
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
    </div>
  );
}

export default App;

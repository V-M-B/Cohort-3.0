import "./App.css";
import Count from "./components/Count";
import { useDispatch } from "react-redux";

const Counter = () => {
  const Dispatch =  useDispatch();
  return (
    <div>
        <p>Counter</p>
        <Count/>
        <button
        onClick={e=>{
            Dispatch({type: 'INCREMENT'})
        }}
        >
        INCREMENT</button>
        <button
                onClick={e=>{
            Dispatch({type: 'DECREMENT'})
        }}
        >DECREMENT</button>
    </div>
  )
}

export default Counter
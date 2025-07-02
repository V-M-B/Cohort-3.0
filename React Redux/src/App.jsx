import "./App.css";
import Count from "./components/Count";
import { useDispatch } from "react-redux";

const Counter = () => {
  const useDispatch = useDispatch();
  return (
    <div>
        <p>Counter</p>
        <Count/>
        <button
        onClick={e=>{
            useDispatch({type: 'INCREMENT'})
        }}
        >
        INCREMENT</button>
        <button
                onClick={e=>{
            useDispatch({type: 'DECREMENT'})
        }}
        >DECREMENT</button>
    </div>
  )
}

export default Counter
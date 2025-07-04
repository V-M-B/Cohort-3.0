
import { useDispatch , useSelector} from 'react-redux'
import { fetchTodos } from './redux/slice/todo.js'

const App = () => {
  const dispatch =useDispatch()

  const state = useSelector(state=>state)
  console.log('State:', state );

  if(state.todo.isLoading){
    return <h1>Loading...</h1>
  } 
  if(state.todo.isError){
    return <h1>Error fetching todos</h1>
  }
  if(state.todo.data){
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {state.todo.data.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    )
  }
  

  return (
    <div>
      <p>Fetch Todos</p>
      <button
      onClick={(e) => {
        e.preventDefault()
        dispatch(fetchTodos())
      }}
      >
        Fetch Todos
      </button>
    </div>
  )
}

export default App
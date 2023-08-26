
import './App.css';
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div className="container-fluid my-2"  >
      <h1 style={{textAlign:'center'}} > Your Todo List</h1>
      
    <TodoForm></TodoForm>
    
    
    </div>
  );
}

export default App;

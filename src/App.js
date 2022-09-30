import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo list app</h1>
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;

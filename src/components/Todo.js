import { useStore, actions } from '../store';
import TodoForm from './TodoForm';
import { RiCloseCircleLine , RiCheckboxCircleFill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo() {
    const [state, dispatch] = useStore()
    const { todos, edit } = state;

    const handleEdit = todo => {
        dispatch(actions.editTodo({ id: todo.id, work: todo.work }));
        dispatch(actions.setUpdateInput(todo.work));
    }

    const handleComplete = id => {
        dispatch(actions.completeTodo(id))
    }

    if (edit.id) {
        return <TodoForm edit={edit} />
    }

    return todos.map((item) => (
        <div
            className={item.isComplete ? 'todo-row complete' : 'todo-row'}
            key={item.id}
        >
            <div
                key={item.id}
            >
                {item.work}
            </div>
            {item.isComplete ?
                null
                :
                (<div className='icons'>
                    <RiCheckboxCircleFill
                        onClick={() => handleComplete(item.id)}
                        className='delete-icon'
                    />
                    <RiCloseCircleLine
                        onClick={() => dispatch(actions.removeTodo(item.id))}
                        className='delete-icon'
                    />
                    <TiEdit
                        onClick={() => handleEdit(item)}
                        className='edit-icon'
                    />
                </div>)
            }
        </div>
    ))
}

export default Todo;
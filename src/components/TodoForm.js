import { useEffect, useRef } from 'react';
import { useStore, actions } from '../store';

function TodoForm({ edit, setEdit }) {
    const [state, dispatch] = useStore();
    let { todoInput, todoInputEdit } = state;
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleAdd = e => {
        e.preventDefault();
        dispatch(actions.addTodo({
            id: Math.floor(Math.random() * 1000),
            work: todoInput,
            isComplete: false
        }))
    }

    const handleUpdate = e => {
        e.preventDefault();
        dispatch(actions.updateTodo({
            id: edit.id,
            work: todoInputEdit
        }))
        dispatch(actions.editTodo({ id: null, work: '' }))
    }

    return (
        <form className='todo-form'>
            {edit ?
                (<>
                    <input
                        className='todo-input edit'
                        placeholder='ToDoを変更'
                        value={todoInputEdit}
                        name='text'
                        ref={inputRef}
                        onChange={e => {
                            dispatch(actions.setUpdateInput(e.target.value));
                        }}
                    />
                    <button
                        onClick={handleUpdate}
                        className='todo-button edit'>
                        変更
                    </button>
                </>) :
                (<>
                    <input
                        className='todo-input'
                        placeholder="ToDoを入力…"
                        value={todoInput}
                        name='text'
                        ref={inputRef}
                        onChange={e => {
                            dispatch(actions.setToDoInput(e.target.value));
                        }}
                    />
                    <button className='todo-button' onClick={handleAdd}>新しいToDo追加</button>
                </>)
            }
        </form>
    )
}


export default TodoForm;
import { ADD_TODO, COMPLETE_TODO, SET_TODO_INPUT, EDIT_TODO, SET_UPDATE_INPUT, UPDATE_TODO, REMOVE_TODO } from "./constants";

const initState = {
    todoInput: '',
    todoInputEdit: '',
    edit: { id: null, work: '' },
    todos: []
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT: {
            return {
                ...state,
                todoInput: action.payload
            }
        }

        case ADD_TODO: {
            if (!action.payload.work || /^\s*$/.test(action.payload.work)) { return { ...state } }
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoInput: ''
            }
        }

        case COMPLETE_TODO: {
            let newTodos = [];
            for (var i = 0; i < state.todos.length; i++) {
                let newTodo = { ...state.todos[i] };
                if (newTodo.id === action.payload) {
                    newTodo.isComplete = !newTodo.isComplete;
                }
                newTodos = [...newTodos, newTodo];
            }
            return {
                ...state,
                todos: [...newTodos]
            }
        }

        case EDIT_TODO: {
            return {
                ...state,
                edit: { ...action.payload }
            }
        }

        case SET_UPDATE_INPUT: {
            return {
                ...state,
                todoInputEdit: action.payload
            }
        }

        case UPDATE_TODO: {
            if (!action.payload.work || /^\s*$/.test(action.payload.work)) { return { ...state } };
            const newTodos = [...state.todos];
            const index = newTodos.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                newTodos[index] = { ...action.payload };
                return { ...state, todos: [...newTodos] }
            }
            return { ...state }
        }

        case REMOVE_TODO: {
            const newTodos = [...state.todos];
            const index = newTodos.findIndex(item => item.id === action.payload);
            if (index !== 0) newTodos.splice(index, 1);
            return { ...state, todos: [...newTodos] }
        }

        default:
            throw new Error("Invalid action.")
    }
}

export { initState }
export default reducer;
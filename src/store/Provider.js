import { useReducer } from 'react';
import Context from './Context'
import reducer, { initState } from './reducer';
// import logger from './logger';

function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState) 
    return (
        // truyen state cho tat ca cac component ben duoi hoac dispatch dc action 
        <Context.Provider value={[state, dispatch]}> 
            {children}
        </Context.Provider>
    )
}

export default Provider;
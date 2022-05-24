import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { bindActionCreators, createStore } from 'redux'
import { FAILED_INCREASED, PASSED_INCREASED } from './action';

type State = {
    passed: number,
    failed: number
}; const initialState: State = { passed: 0, failed: 0 }

const reducer = (currentState = initialState, action: any) => {
    console.log('state', currentState, 'action', action);
    switch (action.type) {
        case PASSED_INCREASED: {
            return { ...currentState, passed: currentState.passed + 1 }
        }
        case FAILED_INCREASED: {
            return { ...currentState, failed: currentState.failed + 1 }
        }
        default: {
            return currentState;
        }
    }
}

const store = createStore(reducer);
export default store;

import React from 'react';
import vodQAReducer from '../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
    createHistory,
    createMemorySource,
    LocationProvider,
} from '@reach/router';
import { render } from '@testing-library/react';
import { AppRouter } from '../App';

function provide() {
    return <Provider store={createReduxStore()}>
        <AppRouter />
    </Provider>;
}

export function renderWithRouter(ui = provide,
    { route = '/', history = createHistory(createMemorySource(route)) } = {}) {
    return {
        ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    };
}

const initialState = {};

export const createReduxStore = (overiddenState = {}) => {
    const allReducers = Object.assign(vodQAReducer);
    const actualState = Object.assign({}, initialState, overiddenState);

    return createStore(allReducers, actualState);
};
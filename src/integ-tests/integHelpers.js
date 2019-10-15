import vodQAReducer from '../reducers';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import LoginContainer from '../containers/LoginContainer';
import { Router, BrowserRouter } from 'react-router-dom';
import {AppRouter }from '../App';

const initialState = {};
export const createReduxStore = (overiddenState = {}) => {
    const allReducers = Object.assign(vodQAReducer);
    const actualState = Object.assign({}, initialState, overiddenState);

    return createStore(allReducers, actualState);
};

export function renderApp() {
    const component = mount(
        <Provider store={createReduxStore()}>
                    <AppRouter />
        </Provider>
    );
    return component;
}
import vodQAReducer from '../reducers';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from '../App';

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

const pause = async (timeInMs) => await new Promise(resolve => setTimeout(resolve, timeInMs));

export const waitUntil = async (conditionCall, doFunction, { tryFor, waiting } = { tryFor: 10, waiting: 1 }) => {
    let i = 0;
    let funcResult = doFunction();

    while (i < tryFor && !conditionCall(funcResult)) {
        i += 1;
        await pause(waiting);
        funcResult = doFunction();
    }
    return conditionCall(funcResult) && funcResult;
};

export const waitForElementToAppear = async (wrapperComponent, elementSelector) => {
    const elementFinder = () => wrapperComponent.update().find(elementSelector);
    const elementFoundCondition = (wrapper) => wrapper.length >= 1;
    const result = await waitUntil(elementFoundCondition, elementFinder);

    if (!result) {
        console.log(elementSelector, ': Element not found');
        throw new Error(`Element not found: ${elementSelector}`);
    }
    return result;
};

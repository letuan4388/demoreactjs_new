import { createStore } from 'redux'
import { reducer } from './Reducer'

const initialState = { userInfo: "" };
export const store = createStore(reducer, initialState);
import { createStore } from "redux";
import reducer from './reducers/reducer';


const initialState = {
    items: []
};


const store = createStore(reducer, initialState);

export default store;
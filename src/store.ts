//Import CreateStore & Reducer --> (to pass state and reducer as arguments into createStore)
import { createStore } from "redux";
import reducer from './reducers/reducer';

//Define InitialState With Items Property
const initialState = {
    items: []
};

//Initialize & Export Store
const store = createStore(reducer, initialState);
export default store;
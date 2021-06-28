//Import FETCH_DATA Action Type
import { FETCH_DATA } from "../actions/types";

//Define InitialState (Items Property Set To Array)
const initialState = {
    items: []
};

//Define Interface For Action (Includes Type and Payload)
interface IAction {
    type: string
    payload: []
};

//Define & Export Reducer Function (Will Popular Items From JSON File)
export default function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
};

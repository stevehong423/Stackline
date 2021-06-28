import { FETCH_DATA } from "../actions/types"

const initialState = {
    items: []
}

interface IAction {
    type: string
    payload: []
}

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

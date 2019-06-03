import { SEND_NUMBER, RESET_NUMPAD } from '../constants/action-type';

const stateInit = {
    values : []
}

export default (state = stateInit, action = {}) => {

    switch(action.type){

        case SEND_NUMBER:

            return {
                ...state,
                values : [ 
                    ...state.values, 
                    action.payload 
                ]
            }
        
        case RESET_NUMPAD:

            return {
                ...state,
                values : []
            }

        default:

            return state;

    }
}
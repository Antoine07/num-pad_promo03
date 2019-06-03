const SEND_NUMBER = 'SEND_NUMBER';

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

        default:

            return state;

    }
}
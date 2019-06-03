import { SEND_NUMBER, RESET_NUMPAD } from '../constants/action-type'

export const sendNumber = (payload) => {
    return { 
        type: SEND_NUMBER, payload 
    }
};

export const resetNumpad = () => {
    return { 
        type: RESET_NUMPAD
    }
};
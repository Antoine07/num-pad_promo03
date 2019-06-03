import { SEND_NUMBER } from '../constants/action-type'

export const sendNumber = (payload) => {
    return { 
        type: SEND_NUMBER, payload 
    }
};

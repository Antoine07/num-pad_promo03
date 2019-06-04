import { 
    SEND_NUMBER, 
    RESET_NUMPAD, 
    USER_CHOICE, 
    RESET_GAME 
} from '../constants/action-type'

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

export const sendUserChoice = () => {
    return { 
        type: USER_CHOICE
    }
};

export const resetGame = () => {
    return { 
        type: RESET_GAME
    }
};
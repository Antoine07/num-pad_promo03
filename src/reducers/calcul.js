import { SEND_NUMBER, RESET_NUMPAD, USER_CHOICE, RESET_GAME } from '../constants/action-type';

import multiplications  from '../utils/multiplications';

const reset = {
    values : [],
    multiplications : multiplications,
    multiplication : multiplications.shift(),
    score : 0,
    status : "progress",
    count : multiplications.length,
    success : null,
    message : { text : null, type : null },
    isMessage : false
}

const stateInit = {
    ...reset
}

export default (state = stateInit, action = {}) => {

    switch(action.type){

        case SEND_NUMBER:

            return {
                ...state,
                values : [ 
                    ...state.values, 
                    action.payload,
                ],
                isMessage : false
            }
        
        case RESET_NUMPAD:

            return {
                ...state,
                values : [],
                isMessage : false
            }

        case USER_CHOICE:

            // récupération des values => choice de l'utilisateur
            const choice = parseInt( state.values.join('') );
            // calculer la multiplication
            const { num1, num2 } = state.multiplication;
            const success = choice === num1 * num2;
            const score = success ? 1 : 0;

            // copie distincte des éléments se trouvant dans mes array
            // dans l'objectif d'avoir toujours un state distincte renvoyé par le reducer
            const multiplications = [ ...state.multiplications ];
            const multiplication = multiplications.length > 0 ? multiplications.shift() : null;
            const status = multiplication === null ? "game over" : "progress" ;

            const message = success ? { text : 'Bravo !!',  type :'alert-success'} : 
            { text : 'Raté', type : 'alert-danger'} ;

            return {
                ...state,
                multiplications : multiplications,
                multiplication : multiplication,
                status : status,
                score : state.score + score,
                values : [],
                count : multiplications.length,
                success : success,
                message : message,
                isMessage : true
            }
        
        case RESET_GAME:
            
            return { ...reset }
        
        default:

            return state;

    }
}
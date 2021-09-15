import {ADD_CARD, ADD_DECK} from "../actions";

function decks(state = {}, action){

    switch ( action.type ){
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]:{
                    ...state[action.deckId],
                    questions: state[action.deckId].questions.concat([action.question])
                }
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deckId]:{
                    title: action.deckId,
                    questions: [],
                    ...state[action.deckId]
                }
            }
        default:
            return state
    }
}

export default decks

import fakeData from "../../fakedata.json"
import {ADD_CRAD} from "../actions";

function decks(state = fakeData, action){

    switch ( action.type ){
        case ADD_CRAD:
            return {
                ...state,
                [action.deckId]:{
                    ...state[action.deckId],
                    questions: state[action.deckId].questions.concat([action.question])
                }
            }
        default:
            return state
    }
}

export default decks

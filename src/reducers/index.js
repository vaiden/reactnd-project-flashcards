import fakeData from "../../fakedata.json"
import {ADD_CARD, ADD_DECK} from "../actions";

function decks(state = fakeData, action){

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
            const retState = {
                ...state,
                [action.deckId]:{
                    title: action.deckId,
                    questions: [],
                    ...state[action.deckId]
                }
            }

            console.log(retState);
            return retState;
        default:
            return state
    }
}

export default decks

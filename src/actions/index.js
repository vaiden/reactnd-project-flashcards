export const ADD_CRAD = 'ADD_CARD';

export function addCard( deckId, question  ){
    return {
        type: ADD_CRAD,
        deckId,
        question
    }
}

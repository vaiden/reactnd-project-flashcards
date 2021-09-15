export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';

export function addCard( deckId, question  ){
    return {
        type: ADD_CARD,
        deckId,
        question
    }
}

export function addDeck( deckId ){
    return {
        type: ADD_DECK,
        deckId
    }
}

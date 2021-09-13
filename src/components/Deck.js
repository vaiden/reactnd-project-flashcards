import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import TextButton from "./TextButton";
import * as Screens from '../consts/Screens'

class Deck extends Component{

    onAddCard = () => {
        const { deck, navigation } = this.props;
        navigation.navigate(
            Screens.AddCard,
            {
                deckId: deck.key
            }
        )
    }

    render(){

        const { deck } = this.props;

        return (
            <View style={{flex:1}}>
                <Text>
                    {deck.title}
                </Text>
                <Text>
                    {deck.cardCount} cards
                </Text>
                <TextButton onPress={this.onAddCard}>
                    Add Card
                </TextButton>
                <TextButton disabled={deck.cardCount === 0}>
                    Start Quiz
                </TextButton>
            </View>
        )
    }
}

function mapStateToProps({decks} , { route }){

    const key = route.params.deckId;

    return{
        deck: {
            title: decks[key].title,
            cardCount: decks[key].questions.length,
            key
        }
    }
}

export default connect(mapStateToProps)(Deck)

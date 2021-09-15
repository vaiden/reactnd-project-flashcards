import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import TextButton from "./TextButton";
import * as screens from '../consts/screens'
import {grayWeb} from "../utils/colors";
import Strong from "./Strong";

class Deck extends Component{

    onAddCard = () => {
        const { deck, navigation } = this.props;
        navigation.navigate(
            screens.AddCard,
            {
                deckId: deck.key
            }
        )
    }

    onStartQuiz= () => {
        const { deck, navigation } = this.props;
        navigation.navigate(
            screens.Quiz,
            {
                deckId: deck.key
            }
        )
    }

    render(){

        const { deck } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    <Strong>{deck.title}</Strong>
                </Text>
                <Text style={styles.text}>
                    {deck.cardCount} card{deck.cardCount>1? 's' : ''}
                </Text>
                <TextButton
                    onPress={this.onAddCard}
                    style={{marginTop:16}}
                >
                    Add Card
                </TextButton>
                <TextButton
                    onPress={this.onStartQuiz}
                    style={{marginTop:8}}
                >
                    Start Quiz
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize: 20,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 4,
        color: grayWeb,
        textAlign:'center'
    },
})

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

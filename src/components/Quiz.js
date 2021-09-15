import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import {grayWeb, lilachLuster} from "../utils/colors";
import Strong from "./Strong";

class Quiz extends Component{

    state = {
        cardIndex: 0,
        showResults: false,
        correctCount: 0
    }

    onSelection = () => ( isCorrect ) => {
        const { deck } = this.props;

        this.setState( prevState => (
            {
                cardIndex: prevState.cardIndex + 1,
                correctCount: prevState.correctCount + isCorrect,
                showResults: prevState.cardIndex + 1 === deck.questions.length
            }))
    }

    onRestart = () => {
        this.setState({
            cardIndex: 0,
            showResults: false,
            correctCount: 0
        })
    }

    render(){
        const { deck, navigation } = this.props;
        const cardCount = deck.questions.length;

        const { cardIndex, showResults, correctCount } = this.state;

        if ( cardCount === 0){
            return (
                <View style={styles.center}>
                    <Text style={styles.text}>
                        No cards in this deck.{'\n'}You can easily add some.
                    </Text>
                </View>
            )
        }

        if ( showResults ){
            return (
                <QuizResults
                    percentage={100 / cardCount * correctCount}
                    onRestart={this.onRestart}
                    navigation={navigation}/>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.textIndex}>
                    <Strong>(</Strong>{cardIndex+1}<Strong>/</Strong>{cardCount}<Strong>)</Strong>
                </Text>
                <QuizQuestion
                    card={deck.questions[cardIndex]}
                    onSelection={this.onSelection()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    text: {
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 4,
        color: grayWeb,
        textAlign: 'center'
    },
    textIndex:{
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 4,
        color: lilachLuster,
    },
});

function mapStateToProps(state, props){
    const { route } = props;
    const { deckId } = route.params;
    const { decks } = state;

    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(Quiz)

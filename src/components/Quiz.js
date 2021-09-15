import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";

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
                <View>
                    <Text>
                        No cards in this deck. You can easily add some.
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
            <View>
                <Text>
                    {cardIndex+1}/{cardCount}
                </Text>
                <QuizQuestion card={deck.questions[cardIndex]} onSelection={this.onSelection()}/>
            </View>
        )
    }
}

function mapStateToProps(state, props){
    const { route } = props;
    const { deckId } = route.params;
    const { decks } = state;

    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(Quiz)

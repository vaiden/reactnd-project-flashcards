import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import TextButton from "./TextButton";

class QuizQuestion extends Component{
    state = {
        showAnswer: false
    }

    onFlip = () => {
        this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer
        }))
    }

    onSelection = ( isCorrect ) => () => {

        this.setState({
            showAnswer: false
        })

        this.props.onSelection( isCorrect );
    }

    render (){
        const { card } = this.props;
        const { showAnswer } = this.state;

        return (
            <View>
                <Text>
                    {showAnswer
                        ? card.answer
                        : card.question
                    }
                </Text>
                <TextButton onPress={this.onFlip}>
                    {showAnswer
                        ? 'Flip to the question'
                        : 'Flip to the answer'
                    }
                </TextButton>
                <TextButton onPress={this.onSelection(true)}>
                    Correct
                </TextButton>
                <TextButton onPress={this.onSelection(false)}>
                    Incorrect
                </TextButton>
            </View>
        )
    }
}

export default connect()(QuizQuestion)

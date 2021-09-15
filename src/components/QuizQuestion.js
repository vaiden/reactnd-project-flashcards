import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import TextButton from "./TextButton";
import {grayWeb} from "../utils/colors";

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
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Text style={styles.textTitle}>
                        {showAnswer
                            ? card.answer
                            : card.question
                        }
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <TextButton
                        onPress={this.onFlip}
                    >
                        {showAnswer
                            ? 'Flip to the question'
                            : 'Flip to the answer'
                        }
                    </TextButton>
                    <TextButton
                        onPress={this.onSelection(true)}
                        style={{marginTop: 24}}
                    >
                        Correct
                    </TextButton>
                    <TextButton
                        onPress={this.onSelection(false)}
                        style={{marginTop: 8}}
                    >
                        Incorrect
                    </TextButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    topView:{
        flex:4,
        justifyContent: 'space-around',
    },
    buttonView:{
        flex:10
    },
    textTitle:{
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 4,
        color: grayWeb,
        fontWeight: 'bold',
        textAlign: 'center'
    },

})

export default connect()(QuizQuestion)

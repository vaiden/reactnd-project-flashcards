import React, {Component} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import TextButton from "./TextButton";
import {connect} from "react-redux";
import {addCard} from "../actions";

class AddCard extends Component{
    state = {
        question:'',
        answer: ''
    }

    onChangeTextQuestion = text => {
        this.setState({
            question: text
        })
    }

    onChangeTextAnswer = text => {
        this.setState({
            answer: text
        })
    }

    onSubmit = () => {
        const deckId = this.props.route.params.deckId;
        const { navigation } = this.props;

        this.props.addCard(
            deckId,
            {
                ...this.state
            }
        )

        navigation.goBack()

    }

    render(){
        return (
            <View>
                <Text>
                    What is your question?
                </Text>
                <TextInput
                    onChangeText={this.onChangeTextQuestion}
                />
                <Text>
                    What is the correct answer?
                </Text>
                <TextInput
                    onChangeText={this.onChangeTextAnswer}
                />
                <TextButton
                    onPress={this.onSubmit}
                    disabled={this.state.question === '' || this.state.answer === ''}
                >
                    Add
                </TextButton>
            </View>
        )
    }
}

const mapDispatchToProps = {
    addCard
}

export default connect(null, mapDispatchToProps)(AddCard)

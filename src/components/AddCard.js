import React, {Component} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import TextButton from "./TextButton";
import {connect} from "react-redux";
import {addCard} from "../actions";
import {grayWeb, lilachLuster} from "../utils/colors";

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
            <View style={styles.container}>
                <Text style={styles.text}>
                    What is your question?
                </Text>
                <TextInput
                    onChangeText={this.onChangeTextQuestion}
                    style={styles.textInput}
                />
                <Text style={[styles.text,{marginTop:16}]}>
                    What is the correct answer?
                </Text>
                <TextInput
                    onChangeText={this.onChangeTextAnswer}
                    style={styles.textInput}
                />
                <TextButton
                    onPress={this.onSubmit}
                    disabled={this.state.question === '' || this.state.answer === ''}
                    style={{marginTop: 16}}
                >
                    Add
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
        color: grayWeb
    },
    textInput:{
        fontSize: 20,
        color: grayWeb,
        alignSelf: 'stretch',

        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        paddingLeft: 4,
        paddingRight: 4,

        borderBottomColor: lilachLuster,
        borderBottomWidth: 2
    }
})

const mapDispatchToProps = {
    addCard
}

export default connect(null, mapDispatchToProps)(AddCard)

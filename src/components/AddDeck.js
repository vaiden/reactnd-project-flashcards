import React, {Component} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import TextButton from "./TextButton";
import {addDeck} from "../actions";
import * as screens from '../consts/screens'
import {connect} from "react-redux";
import {grayWeb, lilachLuster} from "../utils/colors";

class AddDeck extends Component{
    state = {
        deckName:''
    }

    onChangeText = text => {
        this.setState({
            deckName: text
        })
    }

    onSubmit = () => {
        const { navigation, addDeck } = this.props;
        const deckId = this.state.deckName;

        this.setState({
            deckName:''
        });

        addDeck( deckId );
        navigation.navigate(
            screens.DeckList,
            {
                deckId
            }
        );
        navigation.navigate(
          screens.Deck,
            {
                deckId
            }
        );
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    value={this.state.deckName}
                    onChangeText={this.onChangeText}
                    style={styles.textInput}
                    />
                <TextButton
                    onPress={this.onSubmit}
                    disabled={this.state.deckName === ''}
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
    addDeck
}

export default connect(null, mapDispatchToProps)(AddDeck)

import React, {Component} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import TextButton from "./TextButton";
import {addDeck} from "../actions";
import * as Screens from '../consts/Screens'
import {connect} from "react-redux";

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
            Screens.DeckList,
            {
                deckId
            }
        );
        navigation.navigate(
          Screens.Deck,
            {
                deckId
            }
        );
    }

    render(){
        return (
            <View>
                <Text>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    value={this.state.deckName}
                    onChangeText={this.onChangeText}
                    />
                <TextButton
                    onPress={this.onSubmit}
                    disabled={this.state.deckName === ''}
                >
                    Add
                </TextButton>
            </View>
        )
    }
}

const mapDispatchToProps = {
    addDeck
}

export default connect(null, mapDispatchToProps)(AddDeck)

import React, {Component} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import TextButton from "./TextButton";

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
        console.log('Submitting', this.state.deckName);
    }

    render(){
        return (
            <View>
                <Text>
                    What is the name of your new deck?
                </Text>
                <TextInput
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

export default AddDeck

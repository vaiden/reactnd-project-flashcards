import React, {Component} from "react";
import {Text, View} from "react-native";
import TextButton from "./TextButton";
import {clearLocalNotification} from "../utils/helpers";

export default class QuizResults extends Component{

    componentDidMount() {
        clearLocalNotification();
    }

    render() {
        const { percentage , navigation, onRestart } = this.props

        return (
            <View>
                <Text>
                    Quiz results
                </Text>
                <Text>
                    You got {percentage.toFixed(2)}% of the answers correctl!
                </Text>
                <TextButton onPress={onRestart}>
                    Restart Quiz
                </TextButton>
                <TextButton onPress={() => navigation.goBack()}>
                    Back to Deck
                </TextButton>
            </View>
        )
    }
}

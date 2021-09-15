import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import TextButton from "./TextButton";
import {clearLocalNotification} from "../utils/helpers";
import {grayWeb} from "../utils/colors";
import Strong from "./Strong";

export default class QuizResults extends Component{

    componentDidMount() {
        clearLocalNotification();
    }

    render() {
        const { percentage , navigation, onRestart } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Quiz results
                </Text>
                <Text style={styles.text}>
                    You got <Strong>{percentage.toFixed(0)}%</Strong> of the answers correct!
                </Text>
                <TextButton
                    onPress={onRestart}
                    style={{marginTop: 16}}
                >
                    Restart Quiz
                </TextButton>
                <TextButton
                    onPress={() => navigation.goBack()}
                    style={{marginTop: 8}}
                >
                    Back to Deck
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
})

import React from "react";
import {Text, View} from "react-native";
import TextButton from "./TextButton";

export default function QuizResults({ percentage , navigation, onRestart }){

    return (
        <View>
            <Text>
                Quiz results
            </Text>
            <Text>
                You got {percentage}% of the answers correctl!
            </Text>
            <TextButton onPress={onRestart}>
                Restart Quiz
            </TextButton>
            <TextButton onPress={() => navigation.goBack() }>
                Back to Deck
            </TextButton>
        </View>


    )
}

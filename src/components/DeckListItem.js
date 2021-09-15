import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {grayWeb} from "../utils/colors";

export default function DeckListItem({name, count, ...props}){

    return (
        <TouchableOpacity {...props} style={styles.container}>
            <Text style={styles.textTitle}>
                {name}
            </Text>
            <Text style={styles.textSubtitle}>
                {count}
            </Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    },
    textTitle:{
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 4,
        color: grayWeb,
        fontWeight: 'bold'
    },
    textSubtitle:{
        fontSize: 20,
        paddingTop: 4,
        paddingBottom: 8,
        color: grayWeb,
    }
})

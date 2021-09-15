import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {black, gray, pinkLavender} from "../utils/colors";

export default function TextButton({children, onPress, disabled=false, style= {}}){

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.button, style ]}
        >
            <Text style={[styles.text, disabled? styles.disabledText: null]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: pinkLavender,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: black,
        fontSize: 18,
        textAlign: 'center'
    },
    disabledText:{
        color: gray,
    }
})


import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {purple} from "../utils/colors";

export default function TextButton({children, onPress, disabled=false, style= {}}){

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Text style={[styles.button, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        margin: 5,
        textAlign: 'center',
        color: purple,
    }
})


import React from "react";
import {Text, TouchableOpacity} from "react-native";

export default function DeckListItem({name, count, ...props}){

    return (
        <TouchableOpacity {...props}>
            <Text>
                {name}
            </Text>
            <Text>
                {count}
            </Text>
        </TouchableOpacity>
    )
}

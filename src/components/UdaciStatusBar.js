import React from "react";
import {Constants} from "react-native-unimodules";
import {StatusBar, View} from "react-native";
import {blueSapphire} from "../utils/colors";

export default function UdaciStatusBar({ backgroundColor=blueSapphire, ...props}){
    return (
        <View style={{backgroundColor, height:Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

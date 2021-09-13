import React from "react";
import {Constants} from "react-native-unimodules";
import {StatusBar, View} from "react-native";

export default function UdaciStatusBar({ backgroundColor='rgba(90, 90, 90, 1)', ...props}){
    return (
        <View style={{backgroundColor, height:Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

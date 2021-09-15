import React from "react";
import {Platform} from "react-native";
import {blueSapphire, white} from "../utils/colors";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import * as screens from '../consts/screens'

const Tab = Platform.OS === 'android'
    ? createMaterialTopTabNavigator()
    : createBottomTabNavigator();

export default function Home(){
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Platform.select({
                    ios: blueSapphire,
                    android: white
                }),
                tabBarStyle:{
                    backgroundColor: Platform.select({
                        ios: white,
                        android: blueSapphire
                    }),
                    shadowColor: 'rgba(0, 0, 0, 0.24)',
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowRadius: 6,
                    shadowOpacity: 1
                }
            }}>
            <Tab.Screen name={screens.DeckList} component={DeckList} options={{
                tabBarLabel: 'DeckList',
                tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name='cards' size={size} color={color}/>
            }}/>
            <Tab.Screen name={screens.AddDeck} component={AddDeck} options={{
                tabBarLabel: 'Add Deck',
                tabBarIcon: ({ focused, color, size }) => <FontAwesome name='plus-square' size={size} color={color} />
            }}/>
        </Tab.Navigator>
    )
}

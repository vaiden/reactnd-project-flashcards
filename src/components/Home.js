import React from "react";
import {Platform} from "react-native";
import {purple, white} from "../utils/colors";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import * as Screens from '../consts/Screens'

const Tab = Platform.OS === 'android'
    ? createMaterialTopTabNavigator()
    : createBottomTabNavigator();

export default function Home(){
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Platform.select({
                    ios: purple,
                    android: white
                }),
                tabBarStyle:{
                    backgroundColor: Platform.select({
                        ios: white,
                        android: purple
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
            <Tab.Screen name={Screens.DeckList} component={DeckList} options={{
                tabBarLabel: 'DeckList',
                tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name='cards' size={size} color={color}/>
            }}/>
            <Tab.Screen name={Screens.AddDeck} component={AddDeck} options={{
                tabBarLabel: 'Add Deck',
                tabBarIcon: ({ focused, color, size }) => <FontAwesome name='plus-square' size={size} color={color} />
            }}/>
        </Tab.Navigator>
    )
}

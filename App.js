import 'react-native-gesture-handler'; // MUST be the first line
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/components/Home";
import {Provider} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import {blueSapphire, purple, white} from "./src/utils/colors";
import Deck from "./src/components/Deck";
import * as screens from './src/consts/screens'
import AddCard from "./src/components/AddCard";
import {PersistGate} from "redux-persist/integration/react";
import Quiz from "./src/components/Quiz";
import UdaciStatusBar from "./src/components/UdaciStatusBar";
import {createPersistentStore, setLocalNotification} from "./src/utils/helpers";

const { store, persistor } = createPersistentStore()
const Stack = createStackNavigator();

export default class App extends Component {
    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <View style={styles.container}>
                        <UdaciStatusBar barStyle='light-content'/>
                        <NavigationContainer>
                            <Stack.Navigator
                                screenOptions={{
                                    headerTintColor: white,
                                    headerStyle: {
                                        backgroundColor: blueSapphire
                                    }
                                }}
                            >
                                <Stack.Screen name={screens.Home} component={Home} options={{
                                    headerShown: false
                                }}/>
                                <Stack.Screen name={screens.Deck} component={Deck} />
                                <Stack.Screen name={screens.AddCard} component={AddCard} />
                                <Stack.Screen name={screens.Quiz} component={Quiz} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

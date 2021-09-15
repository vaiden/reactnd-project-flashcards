import 'react-native-gesture-handler'; // MUST be the first line
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/components/Home";
import {Provider} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import {purple, white} from "./src/utils/colors";
import Deck from "./src/components/Deck";
import * as Screens from './src/consts/Screens'
import AddCard from "./src/components/AddCard";
import {PersistGate} from "redux-persist/integration/react";
import Quiz from "./src/components/Quiz";
import UdaciStatusBar from "./src/components/UdaciStatusBar";
import {createPersistentStore} from "./src/utils/helpers";

const { store, persistor } = createPersistentStore()
const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container}>
              <UdaciStatusBar  barStyle='light-content'/>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen name={Screens.Home} component={Home} options={{
                          headerShown: false
                      }}/>
                      <Stack.Screen name={Screens.Deck} component={Deck} options={{
                          headerTintColor: white,
                          headerStyle: {
                              backgroundColor: purple
                          }
                      }}/>
                      <Stack.Screen name={Screens.AddCard} component={AddCard} options={{
                          headerTintColor: white,
                          headerStyle: {
                              backgroundColor: purple
                          }
                      }}/>
                      <Stack.Screen name={Screens.Quiz} component={Quiz} options={{
                          headerTintColor: white,
                          headerStyle: {
                              backgroundColor: purple
                          }
                      }}/>
                  </Stack.Navigator>
              </NavigationContainer>
            </View>
          </PersistGate>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

import 'react-native-gesture-handler'; // MUST be the first line
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UdaciStatusBar from "./src/components/UdaciStatusBar";
import {NavigationContainer} from "@react-navigation/native";
import UdaciTabNavigator from "./src/components/UdaciTabNavigator";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from './src/reducers'
import {createStackNavigator} from "@react-navigation/stack";
import {purple, white} from "./src/utils/colors";
import Deck from "./src/components/Deck";
import * as Screens from './src/consts/Screens'
import AddCard from "./src/components/AddCard";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import {PersistGate} from "redux-persist/integration/react";

const persistConfig = {
    key: 'udaciflashcards.decks',
    storage: AsyncStorage,
    version: 1
};

const rootReducer = combineReducers({
    decks: persistReducer(persistConfig, reducer)
});
const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container}>
              <UdaciStatusBar  barStyle='light-content'/>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen name={Screens.Home} component={UdaciTabNavigator} options={{
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

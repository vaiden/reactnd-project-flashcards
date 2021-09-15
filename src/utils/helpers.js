import AsyncStorage from "@react-native-async-storage/async-storage";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import reducer from "../reducers";
import thunk from "redux-thunk";
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'udaciflashcards.notifications'


export function createPersistentStore(){
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

    return { store, persistor }
}

export function clearLocalNotification(){
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then( Notifications.cancelAllScheduledNotificationsAsync );
}

function createNotification(){
    return {
        title: 'Get ready for the test!',
        body: 'Dont forget to take your quiz today',
        ios:{
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification(){
    AsyncStorage.getItem( NOTIFICATION_KEY )
        .then(JSON.parse)
        .then( data => {
            if ( !data ){
                Notifications.requestPermissionsAsync()
                    .then( ({ status }) => {
                        console.log('Notification permissions status:',status);
                        if ( status === 'granted' ){
                            Notifications.cancelAllScheduledNotificationsAsync()
                                .catch(console.error);

                            Notifications.scheduleNotificationAsync({
                                content: createNotification(),
                                trigger: {
                                    hour: 20,
                                    minute: 0,
                                    repeats: true
                                }
                            })
                                .catch(console.error);

                            Notifications.setNotificationHandler({
                                handleNotification: async () => ({
                                    shouldShowAlert: true,
                                    shouldPlaySound: false,
                                    shouldSetBadge: false,
                                })
                            })

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}



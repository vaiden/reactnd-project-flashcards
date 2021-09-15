import AsyncStorage from "@react-native-async-storage/async-storage";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import reducer from "../reducers";
import thunk from "redux-thunk";

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

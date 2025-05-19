import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from "redux-persist/lib/storage";
import userReducer from './slices/UserSlice';

//logger middleware
const logger = createLogger({
    collapsed: true,
    diff: true,
});

//Redux persist configuration
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"] // reducers you want to persist
};

//Reducers
const rootReducer = combineReducers({
    user: userReducer
});

//persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//configure store
const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                //ignores these redux-persist actions
                ignoreActions: [ "persist/PERSIST", "persist/REHYDRATE" ],
                ignoredPaths: ["register", "rehydrate"],
            },
        }).concat(logger), //add logger middleware
});

export const persistor = persistStore(Store);
export default Store;
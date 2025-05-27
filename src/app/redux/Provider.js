"use client"

import { Provider, useSelector } from "react-redux";
import Store, { persistor }from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "../components/Spinner";

export default function ReduxProvider({ children }){
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor} >
                { children}
            </PersistGate>
        </Provider>
    )
}
// import {PersistGate} from "redux-persist/lib/integration/react";
// import {getPersistor} from "@rematch/persist";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./index";

type ReduxProviderType = {
    children: React.ReactNode;
};

// const persistor = getPersistor();

function ReduxProvider({ children }: ReduxProviderType) {
    return (
        <Provider store={store}>
            {/* <PersistGate persistor={persistor}> */}
            {children}
            {/* </PersistGate> */}
        </Provider>
    );
}

export default ReduxProvider;

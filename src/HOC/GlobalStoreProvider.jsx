import React from 'react';
import {store, persistor} from '../store/initStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const GlobalStoreProvider = (props) => {
    return (
        <PersistGate persistor={persistor}>
            <Provider store={store}>
            {props.children}
            </Provider>
        </PersistGate>
    )
}

export default GlobalStoreProvider;
import React from 'react';
import CardHolder from "./Components/CardHolder/CardHolder";
import GlobalModalProvider from "./GlobalModalProvider";
import {BrowserRouter} from "react-router-dom";
import RootRouter from './Route/Root';
import MainLayout from './Layouts/MainLayout';

const App = (props) => {
    return (
        <React.Fragment>
            <GlobalModalProvider>
                <BrowserRouter>
                    <MainLayout>
                        <RootRouter/>
                    </MainLayout>
                </BrowserRouter>
            </GlobalModalProvider>
        </React.Fragment>
    )
}

export default App;
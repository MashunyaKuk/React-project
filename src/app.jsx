import React from 'react';
import CardHolder from "./Components/CardHolder/CardHolder";
import GlobalModalProvider from "./GlobalModalProvider";
import {BrowserRouter} from "react-router-dom";
import RootRouter from './Route/Root';
import MainLayout from './Layouts/MainLayout';
import GlobalThemeProvider from './GlobalThemeProvider';

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <GlobalThemeProvider>
                    <GlobalModalProvider>
                        <MainLayout>
                            <RootRouter/>
                        </MainLayout>
                    </GlobalModalProvider>
                </GlobalThemeProvider>
            </BrowserRouter>  
        </React.Fragment>
    )
}

export default App;
import React from 'react';
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import {BrowserRouter} from "react-router-dom";
import RootRouter from './Route/Root';
import MainLayout from './Layouts/MainLayout';
import GlobalThemeProvider from './HOC/GlobalThemeProvider';

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
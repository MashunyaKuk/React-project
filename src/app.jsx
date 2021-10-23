import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalModalProvider from './HOC/GlobalModalProvider';
import RootRouter from './Route/Root';
import MainLayout from './Layouts/MainLayout';
import GlobalThemeProvider from './HOC/GlobalThemeProvider';
import GlobalStoreProvider from './HOC/GlobalStoreProvider';

const App = () => (
  <>
    <BrowserRouter>
      <GlobalStoreProvider>
        <GlobalThemeProvider>
          <GlobalModalProvider>
            <MainLayout>
              <RootRouter />
            </MainLayout>
          </GlobalModalProvider>
        </GlobalThemeProvider>
      </GlobalStoreProvider>
    </BrowserRouter>
  </>
);

export default App;

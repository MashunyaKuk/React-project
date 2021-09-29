import React from 'react';
import CardHolder from "./Components/CardHolder/cardHolder";
import GlobalModalProvider from "./globalModalProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <GlobalModalProvider renderProps={(setModalContent) => {
                return (<CardHolder setModalContent={setModalContent}/>)
            }}>
            </GlobalModalProvider>
        </React.Fragment>
    )
}

export default App;
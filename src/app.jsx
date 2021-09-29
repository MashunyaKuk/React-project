import React from 'react';
import CardHolder from "./Components/CardHolder/cardHolder";
import GlobalModalProvider from "./globalModalProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <GlobalModalProvider renderProps={(setIsModalOpen) => {
                return (<CardHolder setIsModalOpen={setIsModalOpen}/>)
            }}>
            </GlobalModalProvider>
        </React.Fragment>
    )
}

export default App;
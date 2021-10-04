import React, {useState, memo} from 'react';
import { ThemeProvider, StyleSheetManager, createGlobalStyle } from 'styled-components';

export const ThemeContext = React.createContext('')

const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
`

const GlobalThemeProvider = (props) => {
    const [isThemeGreen, setIsThemeGreen] = useState(false);
    const globalStyle = {infoCardBackgroundColor: "green"}
    const secondGlobalStyle = {infoCardBackgroundColor: "yellow"}
    return (
        <StyleSheetManager>
            <ThemeProvider theme={isThemeGreen ? globalStyle : secondGlobalStyle}>
                <ThemeContext.Provider value={setIsThemeGreen}>
                    <GlobalStyle/>
                    {props.children}
                </ThemeContext.Provider>
            </ThemeProvider>
        </StyleSheetManager>
    )
}

export default memo(GlobalThemeProvider);
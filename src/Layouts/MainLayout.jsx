import React from 'react';
import styled from "styled-components";

const StyledMainLayout = styled.div`
    margin: 50px auto;
    padding: 0 15px;

    
`

const MainLayout = (props) => {
    return (
        <StyledMainLayout className="app">
            <div className="header">
                Header
            </div>
            {props.children}
            <div className="footer">
                Footer
            </div>
        </StyledMainLayout>
        
    )
};

export default MainLayout;
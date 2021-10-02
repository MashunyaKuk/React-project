import React from 'react';

const MainLayout = (props) => {
    return (
        <div className="app">
            <div>
                Header
            </div>
            <div>
                {props.children}
            </div>
            <div>
                Footer
            </div>
        </div>
        
    )
};

export default MainLayout;
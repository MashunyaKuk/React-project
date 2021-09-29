import React, {memo} from 'react';

const ModalWindow = (props) => {
    return (
        <div className={"modal"}>
            {props.children}
        </div>
    )
}

export default memo(ModalWindow);
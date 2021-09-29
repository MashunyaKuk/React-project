import React, {memo, useState} from 'react';
import ModalWindow from "./Components/modalWindow";


const GlobalModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(false);

  return (
    <React.Fragment>
      {modalContent &&
      <ModalWindow>
        {modalContent}
      </ModalWindow>}
      {props.renderProps(setModalContent)}
    </React.Fragment>
  )
}
export default memo(GlobalModalProvider);
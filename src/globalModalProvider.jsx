import React, {memo, useState} from 'react';
import ModalWindow from "./Components/ModalWindow";

export const ModalContext = React.createContext(false);

const GlobalModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(false);

  return (
    <React.Fragment>
      {modalContent &&
      <ModalWindow>
        {modalContent}
      </ModalWindow>}
      <ModalContext.Provider value={setModalContent}>
        {props.children}
      </ModalContext.Provider>
    </React.Fragment>
  )
}
export default memo(GlobalModalProvider);
import React, { memo, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import ModalWindow from '../Components/ModalWindow';

export const ModalContext = React.createContext(false);

const GlobalModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(false);
  const { children } = props;

  return (
    <>
      <ModalContext.Provider value={setModalContent}>
        {modalContent
          && (
            <ModalWindow>
              {modalContent}
            </ModalWindow>
          )}
        {children}
      </ModalContext.Provider>
    </>
  );
};
export default memo(GlobalModalProvider);

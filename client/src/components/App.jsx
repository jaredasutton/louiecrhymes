import React, { useState } from 'react';
import AppBody from './AppBody.jsx';
import Modal from './Modal.jsx';

export default props => {
  const [modalVisibility, setModalVisibility] = useState(true);
  return (
    <>
      {modalVisibility && <Modal setVisibility={setModalVisibility} />}
      <AppBody />
    </>
  );
};

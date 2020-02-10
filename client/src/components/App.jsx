import React, { useState } from 'react';
import AppBody from './AppBody.jsx';
import Modal from './Modal.jsx';

export default props => {
  const clientHasNoEmailSubscribedToken = !localStorage.getItem(
    'emailSubscribed'
  );
  const [modalVisibility, setModalVisibility] = useState(
    clientHasNoEmailSubscribedToken
  );
  return (
    <>
      {modalVisibility && <Modal setVisibility={setModalVisibility} />}
      <AppBody />
    </>
  );
};

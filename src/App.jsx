import { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { ModalWrapper } from './shared/components/ModalWrapper/ModalWrapper';
import { ModalCreateRoom } from './components/ModalCreateRoom/ModalCreateRoom';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <SharedLayout />
      <GlobalStyle />
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <ModalWrapper onClose={() => setShowModal(false)}>
          <ModalCreateRoom />
        </ModalWrapper>
      )}
    </>
  );
}

export default App;

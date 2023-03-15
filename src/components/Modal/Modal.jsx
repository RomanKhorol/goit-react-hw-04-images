import { Overlay, Window } from './Modal.styled';

const Modal = ({ closeModal, children }) => (
  <Overlay onClick={closeModal}>
    <Window>{children}</Window>
  </Overlay>
);
export default Modal;

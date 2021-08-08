import Backdrop from "./Backdrop";

interface ModalProps {
  onCancel(): any;
  onConfirm(): any;
}

function Modal(props: ModalProps) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <>
      <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="btn" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
      <Backdrop onClick={props.onCancel} />
    </>
  );
}

export default Modal;

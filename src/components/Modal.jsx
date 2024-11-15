import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  // exposing Modal functions that can be used in other components
  useImperativeHandle(ref, () => {
    return {
      open() {
        // showModal function provided by built-in dialog element
        dialog.current.showModal();
      },
    };
  });

  // using createPortal to render modal in the modal-root div outside of the root div
  return createPortal(
    <dialog
      ref={dialog}
      className="p-8 m-auto text-center rounded-md shadow-md backdrop:bg-slate-900/90 "
    >
      {children}
      <form method="dialog" className="mt-4">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

// defining the prop types of the Modal component
Modal.propTypes = {
  children: PropTypes.node,
  buttonCaption: PropTypes.string.isRequired,
};

export default Modal;

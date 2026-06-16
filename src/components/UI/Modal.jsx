import ReactDOM from "react-dom";
import classes from "../Cart/Cart.module.css";

const portalElement = document.getElementById("overlays");

function Backdrop(props) {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onClose}
    />
  );
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
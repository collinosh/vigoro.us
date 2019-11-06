
/* <Modal /> component by: collinoshaughnessy@gmail.com */

import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ModalContext from "./context/ModalContext";

import "./Modal.scss";

export default ({ onClose, children, ...props }) => {
    const { title } = props;
    const modalTemplate = useContext(ModalContext);

    return modalTemplate ? ReactDOM.createPortal(
        <div id="ModalOverlay">
            <div id="ModalWrapper">
                <div id="ModalHeader">
                    <div id="ModalTitle">{title}</div>
                    <div id="CloseModalButton" onClick={onClose} />
                </div>
                <div id="ModalBody">{children}</div>
            </div>
        </div>, modalTemplate
    ) : null;
}

import React, { useState, useRef, useEffect } from "react";
import ModalContext from "./ModalContext";

export default ({children}) => {
    const modalRef = useRef();
    const [modalContext, setModalContext] = useState();

    useEffect(() => {
        setModalContext(modalRef.current);
    }, []);

    return (
        <div style={{ position: "relative", zIndex: "100" }}>
            <ModalContext.Provider value={modalContext}>{children}</ModalContext.Provider>
            <div ref={modalRef} />
        </div>
    )
}
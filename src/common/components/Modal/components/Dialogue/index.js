
import React from "react";
import "./Dialogue.scss";

export default ({ dialogue, closeModal, onClickHandler, type }) => {
    // If type == 0, there will be no buttons.
    // If type == 1, there will only be OK.
    // If type >= 2, there will be OK and Cancel
    // Expand types if necessary.
    return (
        <>
            <div id="DialogueModalBody">
                {dialogue}
            </div>
            { type != 0 ? (
                <div id="ButtonsSection">
                    { type >= 2 ? (
                        <div className="SecondaryButton" onClick={closeModal}>
                            Cancel
                        </div> ) : null 
                    }
                    <div className="PrimaryButton" onClick={closeModal}>
                        OK
                    </div>
                </div>
            ) : null}
        </>
    )
}
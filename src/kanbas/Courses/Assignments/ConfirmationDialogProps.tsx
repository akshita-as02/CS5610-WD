import React from 'react';

interface ConfirmationDialogProps {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ onConfirm, onCancel, message }) => {
    return (
        <div className="confirmation-dialog-overlay">
            <div className="confirmation-dialog">
                <p>{message}</p>
                <div className="dialog-buttons">
                    <button onClick={onCancel} className="btn btn-secondary">Cancel</button>
                    <button onClick={onConfirm} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;

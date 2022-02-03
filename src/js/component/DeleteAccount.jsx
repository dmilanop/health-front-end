import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const DeleteAccount = () => {
    const{ actions } = useContext(Context);
    const history = useHistory;

    const deleteAccount = () => {
        const deleteAccount = actions.deleteUser()
        actions.signOut()

        if(deleteAccount){
            history.push('/')
        }
        else{
            alert("Try again")
        }
    };
    
    return(
        <>
        <button type="button" className="btn btn-outline-light but4 ms-5" data-bs-toggle="modal" data-bs-target="#deleteaccountModal">Delete account</button>
        
        <div className="modal fade" id="deleteaccountModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title title-modal-3" id="exampleModalLabel">Alert!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete your account?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteAccount}>Sure!</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default DeleteAccount;
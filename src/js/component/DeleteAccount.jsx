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
        <button type="button" class="btn btn-outline-light but4 ms-5" data-bs-toggle="modal" data-bs-target="#deleteaccountModal">Delete account</button>
        
        <div class="modal fade" id="deleteaccountModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-modal-3" id="exampleModalLabel">Alert!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete your account?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={deleteAccount}>Sure!</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default DeleteAccount;
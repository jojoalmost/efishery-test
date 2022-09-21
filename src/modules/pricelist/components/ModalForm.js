import React from "react";
import Modal from "./modal/Modal";
import {usePriceList} from "../context/PriceListContext";
import {Form} from "./index";

const ModalForm = () => {
    const { showModalForm, setShowModalForm, isEdit } = usePriceList();
    return (
        <Modal show={showModalForm} title={!isEdit? 'Create form': 'Edit form'} onClose={() => setShowModalForm(false)} >
            <Form />
        </Modal>
    )
}
export default ModalForm;

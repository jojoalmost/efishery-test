import React from "react";
import Modal from "./modal/Modal";
import {usePriceList} from "../context/PriceListContext";
import {Form} from "./index";

const ModalForm = () => {
    const { showModalForm, setShowModalForm, isEdit, listRead: {loading: loadingList}, listAction: { loading: loadingAction } } = usePriceList();
    return (
        <Modal show={showModalForm} title={!isEdit? 'Create form': 'Edit form'} loading={loadingAction || loadingList} onClose={() => setShowModalForm(false)} >
            <Form />
        </Modal>
    )
}
export default ModalForm;

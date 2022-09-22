import React from "react";
import {Table} from "./components";
import ModalForm from "./components/ModalForm";
import TopPanel from "./components/TopPanel";

const PriceList = () => {

    return (
        <>
            <TopPanel />
            <Table/>
            <ModalForm/>
        </>
    )
}
export default PriceList;

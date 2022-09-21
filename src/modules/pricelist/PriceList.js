import React from "react";
import {Table} from "./components";
import ModalForm from "./components/ModalForm";
import {usePriceList} from "./context/PriceListContext";

const PriceList = () => {
    const {onCreate} = usePriceList();
    return (
        <>
            {/*<h1>{error}</h1>*/}
            <button onClick={onCreate}>create</button>
            <Table/>
            <ModalForm/>
        </>
    )
}
export default PriceList;

import React from "react";
import Table from "./Table";
import useStein from "../../hooks/useStein";
import Form from "./Form";

const PriceList = () => {
    const { loading, data } = useStein('list');
    return (
        <>
            <Form />
            <Table data={data} isLoading={loading} />
        </>
    )
}
export default PriceList;
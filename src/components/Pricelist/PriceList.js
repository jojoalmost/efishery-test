import React from "react";
import Table from "./Table";
import useStein from "../../hooks/useStein";

const PriceList = () => {
    const { loading, data } = useStein('list');
    return (
        <Table data={data} isLoading={loading} />
    )
}
export default PriceList;
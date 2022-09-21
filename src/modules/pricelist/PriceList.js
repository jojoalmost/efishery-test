import React from "react";
import useSteinRead from "../../hooks/useSteinRead";
import {Form, Table} from "./components";
import useSteinActions from "../../hooks/useSteinActions";

const PriceList = () => {
    const {loading, data, getList} = useSteinRead('list');
    const {onCreate, error} = useSteinActions('list');

    const handleSubmit = async (form) => {
        const area = form['Area'].value.split('|');
        const dateToISO = new Date().toISOString();
        const formData = {
            area_provinsi: area[0],
            area_kota: area[1],
            komoditas: String(form.Komoditas).toUpperCase(),
            price: form.Price,
            size: form.Size.value,
            tgl_parsed: dateToISO,
            timestamp: Date.parse(dateToISO),
            uuid: "be84a65b-5716-45ce-aae9-c7b76023e5cb"
        }
        await onCreate([formData]);
        await getList();
    }

    return (
        <>
            <h1>{error}</h1>
            <Form onSubmit={handleSubmit}/>
            <Table data={data} isLoading={loading}/>
        </>
    )
}
export default PriceList;
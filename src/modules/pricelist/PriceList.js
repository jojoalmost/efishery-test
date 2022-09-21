import React from "react";
import useSteinRead from "../../hooks/useSteinRead";
import {Form, Table} from "./components";
import useSteinActions from "../../hooks/useSteinActions";
import {v1 as uuidv1} from 'uuid';

const PriceList = () => {
    const {loading, data, getList} = useSteinRead('list');
    const {onCreate, onDelete, onEdit, error} = useSteinActions('list');
    const [form, setForm] = React.useState({});
    const [isEdit, setIsEdit] = React.useState(false);

    const handleSubmit = async (form) => {
        const area = form['Area'].value.split('|');
        const dateToISO = new Date().toISOString();
        const formData = {
            uuid: uuidv1(),
            area_provinsi: area[0],
            area_kota: area[1],
            komoditas: String(form.Komoditas).toUpperCase(),
            price: form.Price,
            size: form.Size.value,
            tgl_parsed: dateToISO,
            timestamp: Date.parse(dateToISO),
        }
        if (!isEdit) {
            await onCreate([formData]);
        } else {
            await onEdit('uuid', form.uuid, {uuid: form.uuid, ...formData});
        }
        await getList();
    }

    const handleDelete = async (datum) => {
        await onDelete('uuid', datum.uuid);
        await getList();
    }

    const handleEdit = (datum) => {
        setIsEdit(true);
        setForm(datum);
    }

    return (
        <>
            <h1>{error}</h1>
            <Form onSubmit={handleSubmit} defaultValue={form}/>
            <Table data={data} loading={loading} onDelete={handleDelete} onEdit={handleEdit}/>
        </>
    )
}
export default PriceList;
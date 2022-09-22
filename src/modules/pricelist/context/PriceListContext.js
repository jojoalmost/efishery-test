import React, {useState} from "react";
import useSteinRead from "../../../hooks/useSteinRead";
import {v1 as uuidv1} from 'uuid';
import useSteinActions from "../../../hooks/useSteinActions";

const priceListDefaultValue = {
    uuid: '',
    komoditas: '',
    area_provinsi: '',
    area_kota: '',
    size: '',
    price: '',
    tgl_parsed: new Date(),
    timestamp: ''
};

const PriceListContext = React.createContext({});
const PriceListContextProvider = ({children}) => {
    const [value, setValue] = React.useState(priceListDefaultValue);
    const [isEdit, setIsEdit] = React.useState(false);
    const [showModalForm, setShowModalForm] = useState(false);
    const listRead = useSteinRead('list');
    const listAction = useSteinActions('list');
    const optionsArea = useSteinRead('option_area');
    const optionsSize = useSteinRead('option_size');

    const handleSubmit = async (form) => {
        const date = new Date(form.Tanggal);
        const time= form.Jam.split(':');
        const area = form.Area.value.split('|');
        const dateToISO = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time[0], time[1]).toISOString();
        const formData = {
            uuid: uuidv1(),
            area_provinsi: area[0],
            area_kota: area[1],
            komoditas: String(form.Komoditas).toUpperCase().trim(),
            price: form.Price,
            size: form.Size.value,
            tgl_parsed: dateToISO,
            timestamp: Date.parse(dateToISO),
        }
        if (!isEdit) {
            await listAction.onCreate([formData]);
        } else {
            await listAction.onEdit('uuid', value.uuid, {uuid: value.uuid, ...formData});
        }
        await listRead.getList();
        setIsEdit(false);
        setShowModalForm(false);
    }

    const handleDelete = async (datum) => {
        if (window.confirm(`Apakah anda yakin menghapus ${datum.komoditas} ?`)) {
            await listAction.onDelete('uuid', datum.uuid);
            await listRead.getList();
        }
    }

    const handleEdit = (datum) => {
        setIsEdit(true);
        setShowModalForm(true);
        setValue(datum);
    }

    const handleCreate = () => {
        setIsEdit(false);
        setShowModalForm(true);
        setValue(priceListDefaultValue);
    }

    return (
        <PriceListContext.Provider value={{
            value,
            listRead,
            optionsArea,
            optionsSize,
            showModalForm,
            setShowModalForm,
            isEdit,
            onCreate: handleCreate,
            onEdit: handleEdit,
            onDelete: handleDelete,
            onSubmit: handleSubmit,
        }}>
            {children}
        </PriceListContext.Provider>
    )
}
export default PriceListContextProvider;
export const usePriceList = () => React.useContext(PriceListContext);

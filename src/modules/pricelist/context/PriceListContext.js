import React, {useState} from "react";
import useSteinRead from "../../../hooks/useSteinRead";
import {v1 as uuidv1} from 'uuid';
import useSteinActions from "../../../hooks/useSteinActions";
import moment from "moment";

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
    const [searchValue, setSearchValue] = React.useState(undefined);
    const [isEdit, setIsEdit] = React.useState(false);
    const [showModalForm, setShowModalForm] = useState(false);
    const [sortBy, setSortBy] = useState('tgl_parsed');
    const [sortDirection, setSortDirection] = useState('desc');
    const listRead = useSteinRead('list');
    const listAction = useSteinActions('list');
    const optionsArea = useSteinRead('option_area');
    const optionsSize = useSteinRead('option_size');

    const handleSubmit = async (form) => {
        const area = form.Area.value.split('|');
        const date = moment(form.Tanggal).format('DD MM YYYY');
        const dateToISO = moment(`${date} ${form.Jam}`, "DD MM YYYY hh:mm").toISOString();
        const formData = {
            uuid: uuidv1(),
            area_provinsi: String(area[0]).trim(),
            area_kota: String(area[1]).trim(),
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
        setValue(priceListDefaultValue);
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
            listAction,
            onCreate: handleCreate,
            onEdit: handleEdit,
            onDelete: handleDelete,
            onSubmit: handleSubmit,
            search: {
                setSearchValue,
                searchValue
            },
            sort: {
                sortDirection,
                sortBy,
                setSortBy,
                setSortDirection,
            }
        }}>
            {children}
        </PriceListContext.Provider>
    )
}
export default PriceListContextProvider;
export const usePriceList = () => React.useContext(PriceListContext);

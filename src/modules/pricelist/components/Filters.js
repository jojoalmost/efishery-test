import React from "react";
import {usePriceList} from "../context/PriceListContext";
import JsonToForm from "json-reactform";
import formSearchModel from "../utils/formSearchModel";
import './Filters.scss';
import Button from "../../../components/button/Button";

const Filters = ({onClose}) => {
    const {optionsArea, optionsSize, listRead} = usePriceList();
    const model = formSearchModel(optionsArea.data, optionsSize.data);

    const handleReset = () =>{
        listRead.getList();
    }

    const handleFilter = (form) => {
        /*let date = '';
        let dateToISO = '';
        if (form.Tanggal && form.Jam) {
            date = moment(form.Tanggal).format('DD MM YYYY');
            dateToISO = moment(`${date} ${form.Jam}`, "DD MM YYYY hh:mm").toISOString();
        } else if ((form.Tanggal && !form.Jam) || (!form.Tanggal && form.Jam)) {
            date = moment().format('DD MM YYYY');
            dateToISO = moment(date).toISOString();
        }*/
        const area = form.Area.value ? form.Area.value.split('|') : [];

        const params = {
            ...(form.Area.value && {area_provinsi: area[0], area_kota: area[1]}),
            ...(form.Komoditas && {komoditas: String(form.Komoditas).toUpperCase().trim()}),
            ...(form.Price && {price: form.Price}),
            ...(form.Size && {size: form.Size}),
            // ...(dateToISO && {tgl_parsed: dateToISO}),
        }

        listRead.getList({search: params});
        onClose();
    }

    if (optionsSize.loading || optionsArea.loading) return null;

    return (
        <div className="filter-container">
            <JsonToForm model={model} onSubmit={handleFilter}/>
            <Button className="fullwidth" onClick={handleReset}>Reset</Button>
        </div>
    )
}
export default Filters;

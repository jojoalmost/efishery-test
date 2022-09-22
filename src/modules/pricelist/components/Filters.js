import React from "react";
import {usePriceList} from "../context/PriceListContext";
import JsonToForm from "json-reactform";
import formSearchModel from "../utils/formSearchModel";
import './Filters.scss';

const Filters = ({onClose}) => {
    const {optionsArea, optionsSize, listRead} = usePriceList();
    const model = formSearchModel(optionsArea.data, optionsSize.data);

    const handleFilter = (form) => {
        const area = form.Area.value ? form.Area.value.split('|') : [];
        const params = {
            ...(form.Area.value && {area_provinsi: area[0], area_kota: area[1]}),
            ...(form.Komoditas && {komoditas: String(form.Komoditas).toUpperCase().trim()}),
            ...(form.Price && {price: form.Price}),
            ...(form.size && {size: form.size}),
            ...(form.tgl_parsed && {tgl_parsed: form.tgl_parsed}),
        }

        listRead.getList({search: params});
        onClose();
    }

    if (optionsSize.loading || optionsArea.loading) return null;

    return (
        <div className="filter-container">
            <JsonToForm model={model} onSubmit={handleFilter}/>
        </div>
    )
}
export default Filters;

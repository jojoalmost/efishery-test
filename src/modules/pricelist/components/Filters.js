import React from "react";
import {usePriceList} from "../context/PriceListContext";
import JsonToForm from "json-reactform";
import formSearchModel from "../utils/formSearchModel";
import './Filters.scss';
import Button from "../../../components/button/Button";

const Filters = ({onClose}) => {
    const {optionsArea, optionsSize, listRead, search: {setSearchValue, searchValue}} = usePriceList();
    const model = formSearchModel(searchValue, optionsArea.data, optionsSize.data);

    const handleReset = async () => {
        setSearchValue(undefined);
        await listRead.getList();
        onClose();
    }

    const handleFilter = async (form) => {
        const area = form.Area && form.Area.value ? form.Area.value.split('|') : [];
        const params = {
            ...(area.length > 0 && {area_provinsi: area[0], area_kota: area[1]}),
            ...(form.Komoditas && {komoditas: String(form.Komoditas).toUpperCase().trim()}),
            ...(form.Price && {price: form.Price}),
            ...(form.Size && {size: form.Size.value}),
        }
        setSearchValue(params);
        await listRead.getList({search: params});
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

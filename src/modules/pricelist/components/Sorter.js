import React from "react";
import {usePriceList} from "../context/PriceListContext";
import './Sorter.scss';

const Sorter = () => {
    const {sort: {setSortBy, setSortDirection, sortBy, sortDirection}} = usePriceList();
    const columns = [
        {value: 'komoditas', label: 'Komoditas'},
        {value: 'area_provinsi', label: 'Area Provinsi'},
        {value: 'area_kota', label: 'Area Kota'},
        {value: 'size_number', label: 'Size'},
        {value: 'price_number', label: 'Price'},
        {value: 'tgl_parsed', label: 'Tanggal'},
    ];

    const directions = ['asc', 'desc'];

    const handleChangeDirection = event => {
        setSortDirection(event.target.value);
    }

    const handleChangeSortby = event => {
        setSortBy(event.target.value);
    }

    return (
        <div className="sorter">
            <label>Sort by:</label>
            <select name="sortby" onChange={handleChangeSortby} value={sortBy}>
                {columns.map(({label, value}) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>

            <select name="direction" onChange={handleChangeDirection} value={sortDirection}>
                {directions.map(direction => (
                    <option key={direction} value={direction}>{direction.toUpperCase()}</option>
                ))}
            </select>
        </div>
    )
}
export default Sorter;
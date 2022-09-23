import React from "react";
import './Table.scss';
import {usePriceList} from "../context/PriceListContext";
import Button from "../../../components/button/Button";
import {format} from "date-fns";

const Table = () => {
    const { listRead: { data, loading }, onEdit, onDelete } = usePriceList();

    const currencyFormat = (number = 0) => {
        return new Intl.NumberFormat(['ban', 'id'], {style: 'currency', currency: 'IDR'}).format(number);
    }

    const dateFormat = (date) => {
        return format(new Date(date), 'PPpp');
    }

    const renderTbody = () => {
        if (loading) return (
            <tbody>
            <tr>
                <td colSpan="7" className="content-center">Loading...</td>
            </tr>
            </tbody>
        )
        let cleanData = data.filter(({uuid}) => uuid);
        cleanData = cleanData.sort((a, b) => new Date(b.tgl_parsed).getTime() - new Date(a.tgl_parsed).getTime());

        if (cleanData.length === 0){
            return (
                <tbody>
                <tr>
                    <td colSpan="7" className="content-center">Price list kosong</td>
                </tr>
                </tbody>
            )
        }
        return (
            <tbody>
            {cleanData.map(datum => (
                <tr key={datum.uuid}>
                    <td>{datum.komoditas}</td>
                    <td>{datum.area_provinsi}</td>
                    <td>{datum.area_kota}</td>
                    <td className="right">{datum.size}</td>
                    <td className="right">{currencyFormat(datum.price)}</td>
                    <td>{dateFormat(datum.tgl_parsed)}</td>
                    <td className="actions">
                        <Button className="info" onClick={() => onEdit(datum)}>Edit</Button>
                        <Button className="danger" onClick={() => onDelete(datum)}>Delete</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        )
    }

    return (
        <div>
        <table className="table">
            <thead>
            <tr>
                <th rowSpan={2}>komoditas</th>
                <th colSpan={2}>area</th>
                <th rowSpan={2}>size</th>
                <th rowSpan={2}>price</th>
                <th rowSpan={2}>tanggal</th>
                <th rowSpan={2}>action</th>
            </tr>
            <tr>
                <th>provinsi</th>
                <th>kota</th>
            </tr>
            </thead>
            {renderTbody()}
        </table>
        </div>
    )
}
export default Table;

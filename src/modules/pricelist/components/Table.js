import React from "react";
import styles from './Table.module.scss';
import {usePriceList} from "../context/PriceListContext";

const Table = () => {
    const { listRead: { data, loading }, onEdit, onDelete } = usePriceList();

    const currencyFormat = (number = 0) => {
        return new Intl.NumberFormat(['ban', 'id'], {style: 'currency', currency: 'IDR'}).format(number);
    }

    const dateFormat = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        return new Date(date).toLocaleDateString("id-ID", options);
    }

    const renderTbody = () => {
        if (loading) return (
            <tbody>
            <tr>
                <td colSpan="7">Loading...</td>
            </tr>
            </tbody>
        )
        let cleanData = data.filter(({uuid}) => uuid);
        cleanData = cleanData.sort((a, b) => new Date(b.tgl_parsed).getTime() - new Date(a.tgl_parsed).getTime());
        return (
            <tbody>
            {cleanData.map(datum => (
                <tr>
                    <td>{datum.komoditas}</td>
                    <td>{datum.area_provinsi}</td>
                    <td>{datum.area_kota}</td>
                    <td className={styles.textRight}>{datum.size}</td>
                    <td className={styles.textRight}>{currencyFormat(datum.price)}</td>
                    <td>{dateFormat(datum.tgl_parsed)}</td>
                    <td>
                        <button onClick={() => onEdit(datum)}>Edit</button>
                        <button onClick={() => onDelete(datum)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        )
    }

    return (
        <table className={styles.table}>
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
    )
}
export default Table;

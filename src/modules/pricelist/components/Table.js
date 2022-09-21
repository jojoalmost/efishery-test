import React from "react";

const Table = ({data = [], loading, onDelete, onEdit}) => {
    const currencyFormat = (number = 0) => {
        return new Intl.NumberFormat(['ban', 'id'], {style: 'currency', currency: 'IDR'}).format(number)
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
                    <td>{datum.size}</td>
                    <td>{currencyFormat(datum.price)}</td>
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
        <table border={1} width="100%">
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
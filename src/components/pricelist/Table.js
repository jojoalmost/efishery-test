import React from "react";

const Table = ({data = []}) => {
    const currencyFormat = (number = 0) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number)
    }
    return (
        <table border={1}>
            <thead>
            <tr>
                <th rowSpan={2}>komoditas</th>
                <th colSpan={2}>lokasi</th>
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
            <tbody>
            {data.map(datum => (
                <tr>
                    <td>{datum.komoditas}</td>
                    <td>{datum.area_provinsi}</td>
                    <td>{datum.area_kota}</td>
                    <td>{datum.size}</td>
                    <td>{currencyFormat(datum.price)}</td>
                    <td>{datum.tgl_parsed}</td>
                    <td>
                        <button>edit</button>
                        <button>hapus</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default Table;
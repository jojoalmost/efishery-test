import React from "react";
import './Table.scss';
import {usePriceList} from "../context/PriceListContext";
import Button from "../../../components/button/Button";
import moment from "moment";
import Alert from "../../../components/alert/Alert";

const Table = () => {
    const {listRead: {data, loading, error}, onEdit, onDelete, sort: {sortBy, sortDirection}} = usePriceList();

    const currencyFormat = (number = 0) => {
        return new Intl.NumberFormat(['ban', 'id'], {style: 'currency', currency: 'IDR'}).format(number);
    }

    const dateFormat = (date) => {
        moment.locale('id');
        return moment(date).format('LLLL');
    }

    const sortedData = React.useMemo(() => {
        let sortedData = data.filter(({uuid}) => uuid);
        sortedData = sortedData.map(datum => ({
            ...datum,
            area_kota: String(datum.area_kota).trim(),
            size_number: Number(datum.size),
            price_number: Number(datum.price),
        }))
        if (sortBy !== '') {
            sortedData.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                    return sortDirection === 'asc' ? -1 : 1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return sortDirection === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedData;
    }, [data, sortBy, sortDirection]);

    const renderTbody = () => {
        if (loading) {
            return (
                <tbody>
                <tr>
                    <td colSpan="7">
                        <div className="content-center">
                            <div className="loading"/>
                            <h3>Loading...</h3>
                        </div>
                    </td>
                </tr>
                </tbody>
            )
        }

        if (sortedData.length === 0) {
            return (
                <tbody>
                <tr>
                    <td colSpan="7">
                        <div className="content-center">
                            <h3>No Entry Data</h3>
                        </div>
                    </td>
                </tr>
                </tbody>
            )
        }
        return (
            <tbody>
            {sortedData.map((datum, index) => (
                <tr key={index}>
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
        <div className="table-wrapper">
            <Alert error={error}/>
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

import React from "react";
import {usePriceList} from "../context/PriceListContext";
import Button from "../../../components/button/Button";
import {Filters, Modal, Sorter} from "./index";
import './TopPanel.scss';

const TopPanel = () => {
    const {onCreate, listRead: {loading: loadingList}, listAction: { loading: loadingAction }} = usePriceList();
    const [showFilter, setShowFilter] = React.useState(false);

    const handleShowFilter = () => {
        setShowFilter(!showFilter)
    }

    return (
        <>
            <div className="top-panel">
                <div className="actions">
                    <Button onClick={onCreate}>Create</Button>
                    <Button onClick={handleShowFilter}>Advanced Filter</Button>
                </div>
                <Sorter/>
            </div>
            <Modal show={showFilter} loading={loadingAction || loadingList} title="Advanced Filter" onClose={handleShowFilter}>
                <Filters onClose={handleShowFilter}/>
            </Modal>
        </>
    )
}
export default TopPanel

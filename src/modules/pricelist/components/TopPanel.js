import React from "react";
import {usePriceList} from "../context/PriceListContext";
import Button from "../../../components/button/Button";
import Filters from "./Filters";
import './TopPanel.scss';
import Modal from "./modal/Modal";

const TopPanel = () => {
    const {onCreate} = usePriceList();
    const [showFilter, setShowFilter] = React.useState(false);

    const handleShowFilter = () => {
        setShowFilter(!showFilter)
    }

    return (
        <div className="top-panel">
            <Modal show={showFilter} title="Advanced Filter" onClose={handleShowFilter}>
                <Filters onClose={handleShowFilter} />
            </Modal>
            <Button onClick={onCreate}>Create</Button>
            <Button onClick={handleShowFilter}>Advanced Filter</Button>
        </div>
    )
}
export default TopPanel

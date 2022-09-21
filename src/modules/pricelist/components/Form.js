import React from "react";
import JsonToForm from 'json-reactform';
import formModel from "../utils/formModel";
import styles from './Form.module.scss'
import {usePriceList} from "../context/PriceListContext";

const Form = () => {
    const { value, optionsArea, optionsSize, onSubmit } = usePriceList();
    const model = formModel(value, optionsArea.data, optionsSize.data);

    if (optionsSize.loading || optionsArea.loading) return null;

    return (
        <div className={styles.form}>
            <JsonToForm model={model} onSubmit={onSubmit}/>
        </div>
    )
}
export default Form;

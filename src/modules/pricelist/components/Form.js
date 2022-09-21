import React from "react";
import JsonToForm from 'json-reactform';
import useSteinRead from "../../../hooks/useSteinRead";
import formModel from "../utils/formModel";
import styles from './Form.module.scss'

const Form = ({onSubmit, defaultValue}) => {
    const {data: optionsArea, loading: optionsAreaLoading} = useSteinRead('option_area');
    const {data: optionsSize, loading: optionsSizeLoading} = useSteinRead('option_size');
    const [values, setValues] = React.useState({});
    const model = formModel(values, optionsArea, optionsSize);

    React.useEffect(() => {
        setValues(defaultValue);
    }, [defaultValue]);
    if (optionsAreaLoading || optionsSizeLoading || JSON.stringify(defaultValue) !== JSON.stringify(values)) return null;

    return (
        <div className={styles.form}>
            <JsonToForm model={model} onSubmit={onSubmit}/>
        </div>
    )
}
export default Form;
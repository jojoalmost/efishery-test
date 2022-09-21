import React from "react";
import JsonToForm from 'json-reactform';
import useSteinRead from "../../../hooks/useSteinRead";
import formModel from "../utils/formModel";

const Form  = ({onSubmit}) => {
    const { data: optionsArea, loading:optionsAreaLoading } = useSteinRead('option_area');
    const { data: optionsSize, loading:optionsSizeLoading } = useSteinRead('option_size');
    if (optionsAreaLoading | optionsSizeLoading) return null;
    const model = formModel(optionsArea, optionsSize);

    return (
        <JsonToForm model={model} onSubmit={onSubmit}/>
    )
}
export default Form;
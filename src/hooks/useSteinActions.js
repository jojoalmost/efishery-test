import React from "react";
import SteinStore from "stein-js-client";

const store = new SteinStore(process.env.REACT_APP_STEIN_STORE);

const useSteinActions = (sheetName = '') => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [result, setResult]= React.useState(null);

    const onCreate = (data) => {
        setLoading(true);
        return store.append(sheetName, data).then(result => {
            if (result.hasOwnProperty('error')) throw new Error("Please check payload format!");
            setResult(result);
            return result;
        }).catch(e =>{
            setError(e.message);
            throw e;
        }).finally(()=>{
            setLoading(false);
        });
    }

    const onEdit = (search, data) => {
        setLoading(true);
        setError('');
        return store.edit(sheetName, {search: search, set: data}).then(result => {
            if (result.hasOwnProperty('error')) throw new Error("Please check payload format!");
            setResult(result);
            return result;
        }).catch(e =>{
            setError(e.message);
            throw e;
        }).finally(()=>{
            setLoading(false);
        });
    }

    const onDelete = (search) => {
        setLoading(true);
        setError('');
        return store.delete(sheetName, {search: search}).then(result => {
            if (result.hasOwnProperty('error')) throw new Error("Please check payload format!");
            setResult(result);
            return result;
        }).catch(e =>{
            setError(e.message);
            throw e;
        }).finally(()=>{
            setLoading(false);
        });
    }

    return { loading, result, error, onCreate, onEdit, onDelete  };
}
export default useSteinActions

import React from "react";
import SteinStore from "stein-js-client";

const store = new SteinStore(process.env.REACT_APP_STEIN_STORE);

const useStein = (sheetName = '') => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [data, setData]= React.useState([]);

    const getList = (options) => {
        setLoading(true);
        setError('');
        store.read(sheetName, options).then(result => {
            setData(result)
        }).catch(e => {
            setError(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    const onEdit = (options) => {
        setLoading(true);
        setError('');
        store.edit(sheetName, ...options).then(result => {
            setData(result)
        }).catch(e =>{
            setError(e.message);
        }).finally(()=>{
            setLoading(false);
        });
    }

    const onDelete = (options) => {
        setLoading(true);
        setError('');
        store.delete(sheetName, ...options).then(result => {
            setData(result)
        }).catch(e =>{
            setError(e.message);
        }).finally(()=>{
            setLoading(false);
        });
    }

    React.useEffect(() =>{
        getList()
    }
    ,[]);

    return { loading, data, error, getList, onEdit, onDelete  };
}
export default useStein

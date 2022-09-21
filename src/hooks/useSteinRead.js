import React from "react";
import SteinStore from "stein-js-client";

const store = new SteinStore(process.env.REACT_APP_STEIN_STORE);

const useSteinRead = (sheetName = '') => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [data, setData]= React.useState([]);

    const getList = (options) => {
        setLoading(true);
        setError('');
        return store.read(sheetName, options).then(result => {
            setData(result)
            return result;
        }).catch(e => {
            setError(e.message);
            throw e;
        }).finally(() => {
            setLoading(false);
        });
    }

    React.useEffect(() =>{
        getList()
    }
    ,[]);

    return { loading, data, error, getList  };
}
export default useSteinRead

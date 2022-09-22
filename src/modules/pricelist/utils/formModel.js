const formModel = (value, optionsArea = [], optionsSize = []) => {
    const areas = optionsArea.map(({province, city}) => ({
        "value": `${province}|${city}`,
        "label": `${province} - ${city}`,
    }));

    const sizes = optionsSize.map(({size}) => ({
        "value": size,
        "label": size,
    }));
    return {
        "Komoditas": {
            "required": true,
            "placeholder": "ex: Bandeng...",
            "defaultValue": value.komoditas,
        },
        "Area": {
            "type": "select",
            "required": true,
            "options": areas,
            "defaultValue": `${value.area_provinsi}|${value.area_kota}`,
        },
        "Size": {
            "type": "select",
            "required": true,
            "options": sizes,
            "defaultValue": value.size,
        },
        "Price": {
            "type": "currency",
            "required": true,
            "defaultValue": value.price,
        },
        // "Date": {
        //     "type": "date",
        //     "required": true,
        // },
        // "Time": {
        //     "type": "time",
        //     "required": true,
        // },
        "Save": {
            "type": "submit",
        }
    }
}

export default formModel;

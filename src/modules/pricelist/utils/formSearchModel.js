const formSearchModel = (value, optionsArea = [], optionsSize = []) => {
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
            "placeholder": "e.g. Bandeng...",
            "defaultValue": value?.komoditas,
        },
        "Area": {
            "type": "select",
            "options": areas,
            "defaultValue": `${value?.area_provinsi}|${value?.area_kota}`,
            "placeholder": "e.g. ACEH - ACEH KOTA",
        },
        "Size": {
            "type": "select",
            "options": sizes,
            "defaultValue": value?.size,
            "placeholder": "e.g. 40",
        },
        "Price": {
            "type": "currency",
            "defaultValue": value?.price,
            "placeholder": "e.g. 100,000",

        },
        "Search": {
            "type": "submit",
        }
    }
}

export default formSearchModel;

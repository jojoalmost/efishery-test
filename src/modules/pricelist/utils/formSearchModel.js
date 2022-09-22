const formSearchModel = (optionsArea = [], optionsSize = []) => {
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
        },
        "Area": {
            "type": "select",
            "options": areas,
            "placeholder": "e.g. ACEH - ACEH KOTA",
        },
        "Size": {
            "type": "select",
            "options": sizes,
            "placeholder": "e.g. 40",
        },
        "Price": {
            "type": "currency",
            "placeholder": "e.g. 100,000",

        },
        "Search": {
            "type": "submit",
        }
    }
}

export default formSearchModel;

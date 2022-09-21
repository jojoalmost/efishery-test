const formModel = (optionsArea = [], optionsSize = []) => {
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
            "placeholder": "ex: Bandeng..."
        },
        "Area": {
            "type": "select",
            "required": true,
            "options": areas,
        },
        "Size": {
            "type": "select",
            "required": true,
            "options": sizes,
        },
        "Price": {
            "type": "number",
            "required": true,
        },
        "Save": {
            "type": "submit",
        }
    }
}

export default formModel;
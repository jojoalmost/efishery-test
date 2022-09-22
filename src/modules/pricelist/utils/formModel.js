const formModel = (value, optionsArea = [], optionsSize = []) => {
    const areas = optionsArea.map(({province, city}) => ({
        "value": `${province}|${city}`,
        "label": `${province} - ${city}`,
    }));

    const sizes = optionsSize.map(({size}) => ({
        "value": size,
        "label": size,
    }));

    const getTime = () => {
        const hh = new Date(value.tgl_parsed).getHours();
        const mm = new Date(value.tgl_parsed).getMinutes();
        return `${hh}:${mm}`;
    }

    return {
        "Komoditas": {
            "required": true,
            "placeholder": "e.g. Bandeng...",
            "defaultValue": value.komoditas,
        },
        "Area": {
            "type": "select",
            "required": true,
            "options": areas,
            "defaultValue": `${value.area_provinsi}|${value.area_kota}`,
            "placeholder": "e.g. ACEH - ACEH KOTA",
        },
        "Size": {
            "type": "select",
            "required": true,
            "options": sizes,
            "defaultValue": value.size,
            "placeholder": "e.g. 40",
        },
        "Price": {
            "type": "currency",
            "required": true,
            "defaultValue": value.price,
            "placeholder": "e.g. 100,000",
        },
        "Tanggal": {
            "type": "date",
            "required": true,
            "defaultValue": new Date(value.tgl_parsed),
        },
        "Jam": {
            "type": "time",
            "required": true,
            "defaultValue": getTime(),
        },
        "Save": {
            "type": "submit",
        }
    }
}

export default formModel;

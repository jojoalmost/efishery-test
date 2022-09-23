import moment from "moment";

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
            "defaultValue": moment(new Date(value.tgl_parsed)).format('HH:mm'),
        },
        "Save": {
            "type": "submit",
        }
    }
}

export default formModel;

import React from "react";
import JsonToForm from 'json-reactform';

const Form  = () => {
    const model = {
        "Plan Date": {
            "type": "date",
            "format": "dd MMMM yyyy",
            "required": true
        },
        "Qty": {
            "type": "number",
            "required": true
        },
        "Item Number": {
            "type": "select",
            "required": true,
            "options": [ //use static json arry to get options
                {
                    "value": "1",
                    "label": "item 1"
                },
                {
                    "value": "2",
                    "label": "item 2"
                }
            ],
        },
        "Parts": {
            "type": "checkbox",
            "required": true,
            "options": [ //use static json arry to get options
                {
                    "value": "checkbox_item_1",
                    "label": "Checkbox 1"
                },
                {
                    "value": "checkbox_item_2",
                    "label": "Checkbox 2"
                }
            ],
        },
        "Status": {
            "type": "radio",
            "required": true,
            "options": [ //use static json arry to get options
                {
                    "value": "completed",
                    "label": "Completed"
                },
                {
                    "value": "not_completed",
                    "label": "Not Completed"
                }
            ],
        },
        "Save": { // button submit
            "type": "submit",
        }
    }
    const handleSubmit = (form) => {
        console.log(form);
    }
    return (
        <JsonToForm model={model} onSubmit={handleSubmit}/>
    )
}
export default Form;
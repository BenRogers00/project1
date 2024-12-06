import { useState } from "react";
import InputCategoryAmounts from "./input.js";
import { DataDisplay } from "./DataDisplay.js";

function ParentComponent() {
    const [dataToSend, setDataToSend] = useState([]);

    function passData(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            RequiredPayments: parseFloat(formData.get("RequiredPayments")) || 0,
            OtherSpending: parseFloat(formData.get("OtherSpending")) || 0,
            Savings: parseFloat(formData.get("Savings")) || 0,
        };

        const newData = [
            {
                id: 1,
                type: "Waste",
                total: data.OtherSpending
            },
            {
                id: 2,
                type: "Savings",
                total: data.Savings
            },
            {
                id: 3,
                type: "Required Spending",
                total: data.RequiredPayments
            }
        ];
        setDataToSend(newData); 
    }

    return (
        <div>
            <InputCategoryAmounts passData={passData} />
            <DataDisplay data={dataToSend} />
        </div>
    );
}

export default ParentComponent;

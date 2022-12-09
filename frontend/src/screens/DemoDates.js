import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { addDays, subDays } from "react-datepicker";

const DemoDates = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div style={{ marginTop: "90px" }}>DemoDates
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
                placeholderText='Select the Date & Time'


            />
        </div>
    )
}

export default DemoDates
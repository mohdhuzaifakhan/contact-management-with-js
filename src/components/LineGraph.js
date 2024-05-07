import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export const options = {
    title: "Covid-19 cases",
    curveType: "function",
    legend: { position: "bottom" },
    ticks: 10
};

export default function Charts() {
    const [data, setData] = useState([
        ["Date", "Cases", "Deaths", "Recovered"],
        ['1/10/20', 119051, 122, 345]
    ]);

    useEffect(() => {
        axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((response) => {
            const arr = Object.entries(response.data.cases).map(([date, value]) => [new Date(date), value, response.data.deaths[date], response.data.recovered[date]]);
            setData([...data, ...arr]);
        });
    }, []);

    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

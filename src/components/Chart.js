import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ["2014", "2016", "2018", "2021", "2022"],
    datasets: [
      {
        label: "Кількість клієнтів",
        data: [3, 10, 25, 35, 50],
        backgroundColor: "#008000",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Розвиток Best-Run Consulting (2014–2022)" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;

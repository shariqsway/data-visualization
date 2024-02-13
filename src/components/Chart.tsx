import Plotly, { Data, Layout } from "plotly.js-dist-min";
import React, { useEffect } from "react";
import { Colors } from "../constants";
import { Product } from "../types";

interface ChartProps {
  products: Product[];
}

const Chart: React.FC<ChartProps> = ({ products }) => {
  const data = (products: Product[]): Data[] => {
    const titles = products.map((product) => product.title);
    const prices = products.map((product) => product.price);
    return [
      {
        x: titles,
        y: prices,
        type: "bar",
        marker: {
          color: Colors.Primary,
          opacity: 0.9,
        },
      },
    ];
  };

  useEffect(() => {
    if (products) {
      const chart = data(products);
      const layout: Partial<Layout> = {
        font: {
          family: "Poppins, sans-serif",
          size: 13,
        },
        yaxis: { title: "Price" },
      };
      Plotly.newPlot("chart", chart, layout);
    }
  }, [products]);

  return <div id="chart" />;
};

export default Chart;

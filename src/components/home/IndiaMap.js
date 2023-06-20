import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <DatamapsIndia
      regionData={{
        Maharashtra: {
          value: 10,
        },
        Rajasthan: {
          value: 10,
        },
        Gujarat: {
          value: 8,
        },
        Karnataka: {
          value: 7,
        },
        TamilNadu: {
          value: 1,
        },
        Kerala: {
          value: 8,
        },
      }}
      hoverComponent={({ value }) => {
        return (
          <div>
            <div>{value.value} schools</div>
          </div>
        );
      }}
      mapLayout={{
        title: "Statewise",
        legendTitle: "Number of Tenders",
        startColor: "#FFDAB9",
        endColor: "#FF6347",
        hoverTitle: "Count",
        noDataColor: "#f5f5f5",
        borderColor: "#8D8D8D",
        hoverBorderColor: "#8D8D8D",
        hoverColor: "green",
        height: 70,
        weight: 30,
      }}
    />
  );
};

export default MapChart;

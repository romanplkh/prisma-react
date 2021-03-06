import React from "react";
import "./results.scss";

const Results = ({ demographicsData }) => {
  return (
    <div className="data-container">
      <div className="circle">
        <div className="caption">Age</div>
        <div className="value">{demographicsData.ageData.value}</div>
        <div className="probability">
          {parseFloat(demographicsData.ageData.probability * 100).toFixed(2)} %
        </div>
      </div>
      <div className="circle">
        <div className="caption">Gender</div>
        <div className="value">{demographicsData.genderData.value}</div>
        <div className="probability">
          {parseFloat(demographicsData.genderData.probability * 100).toFixed(2)}
          %
        </div>
      </div>
      <div className="circle">
        <div className="caption">Culture</div>
        <div className="value">{demographicsData.cultureData.value}</div>
        <div className="probability">
          {parseFloat(demographicsData.cultureData.probability * 100).toFixed(
            2
          )}{" "}
          %
        </div>
      </div>
    </div>
  );
};

export default Results;

import React from "react";
import "./results.scss";

const Results = ({ demographicsData }) => {
  return (
    <div className="data-container">
      <div className="circle">
        <div className="caption">Age</div>
        <div className="value">{demographicsData.ageData.value}</div>
      </div>
      <div className="circle">
        <div className="caption">Gender</div>
        <div className="value">{demographicsData.genderData.value}</div>
      </div>
      <div className="circle">
        <div className="caption">Culture</div>
        <div className="value">
          hispanic, latino, or spanish origin
          {/* {demographicsData.cultureData.value} */}
        </div>
      </div>
    </div>
  );
};

export default Results;

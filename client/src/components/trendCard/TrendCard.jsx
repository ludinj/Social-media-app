import React from "react";
import "./trendCard.scss";
import { TrendData } from "../../TemporaryData/TrendData";
const TrendCard = () => {
  return (
    <div className="trendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend, i) => {
        return (
          <div className="trend" key={i}>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;

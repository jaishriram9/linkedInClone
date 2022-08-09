import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets_article__left">
          <FiberManualRecord />
        </div>
        <div className="widgets_article__right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
        
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
          "Learning React is fun",
          "React Basics - top news 2444 readers"
        )}
        {newsArticle("WOW thats lovely", "Feeling cool")}
        {newsArticle(
          "CoronaVirus Cases : 45",
          "top news 24 readers"
        )}
        {newsArticle("Bitcoin Price Decreases", "Feeling Relaxed")}
    </div>
  );
};

export default Widgets;

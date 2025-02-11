import React from "react";

const NewsItem = React.memo(({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
      <img src={imageUrl} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
});

export default NewsItem;

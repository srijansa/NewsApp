import React, { useState, useEffect, useMemo } from "react";
import NewsItem from "./NewsItem";

const News = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
  
        if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch news`);
  
        const data = await response.json();
        // console.log("API Response:", data); 
  
        if (!data.Data || !Array.isArray(data.Data)) {
          throw new Error("Invalid API response structure");
        }
  
        setArticles(data.Data); 
      } catch (error) {
        console.error("Fetch error:", error.message);
        setError(error.message)
      } finally {
        setLoading(false);
      }
    }
  
    fetchNews();
  }, []);

  const filteredArticles = useMemo(() => {
    if (!Array.isArray(articles)) return [];
    const result = articles.filter(article =>
      article.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("Filtered Articles:", result); 
    return result;
  }, [articles, searchQuery]);
  
  

  return (
    <div className="container mt-3">
      {error ? (
        <div className="alert alert-danger">{error}</div>
      ) : loading ? (
        <h4 className="text-center">Loading...</h4>
      ) : articles.length === 0 ? (
        <h4 className="text-center">No news articles found.</h4> 
      ) : (
        <div className="row">
          {filteredArticles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title || "No Title"}
                description={article.body ? article.body.slice(0, 100) : "No description available"}
                imageUrl={article.imageurl || "https://via.placeholder.com/150"}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;

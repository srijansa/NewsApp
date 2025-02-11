import React, {useState, useEffect, useMemo, useCallback} from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(`https://api.coingecko.com/api/v3/news?page=${page}`);
      const data = await response.json();
      setArticles(prevArticles => [...prevArticles, ...data.data]);
      setLoading(false);
    }
    fetchNews();
  }, [page]);
  
  const filteredArticles = useMemo(() => {
    return articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [articles, searchQuery]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      setPage(prevPage => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [handleScroll]);

  return (
    <div className={`container ${theme}`}>
      <div className="d-flex justify-content-between my-3">
        <h2>Latest Crypto News</h2>
        <button className="btn btn-secondary" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {loading ? <h4>Loading...</h4> : (
        <div className="row">
          {filteredArticles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title || "No Title Available"}
                description={article.content ? article.content.slice(0, 100) : "No description available"}
                imageUrl={article.thumb_2x || "https://via.placeholder.com/150"}
                newsUrl={article.url || "/"}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
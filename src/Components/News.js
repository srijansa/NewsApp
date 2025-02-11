import React, {useState, useEffect, useMemo} from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = userState("");
  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    async function fetchNews(){
      const response = await fetch("https://api.coingecko.com/api/v3/news");
      const data = await response.json();
      setArticles(data.data);
      setLoading(false);
    }
    fetchNews();
}, []);
  
  const handleScroll = useCallback( ()=> {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      setPage(prevPage => prevPage + 1);
    }
    }, []
  );

}

export default News;
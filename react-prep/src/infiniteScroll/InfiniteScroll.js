import React, { useState, useEffect, useCallback } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]);
      setHasMore(newData.length > 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  // Fetch data when component mounts and when page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  // Function to handle scroll event
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading ||
      !hasMore
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  }, [loading, hasMore]);

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <h1>Infinite Scroll</h1>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more data to load.</p>}
    </div>
  );
};

export default InfiniteScroll;

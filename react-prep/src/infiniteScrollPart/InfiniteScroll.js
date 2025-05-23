import React, { useEffect, useRef, useState, useCallback } from "react";

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);
  const ITEMS_PER_LOAD = 10;
  const TOTAL_ITEMS = 100;

  // Simulate fetch
  const fetchItems = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newItems = Array.from(
          { length: ITEMS_PER_LOAD },
          (_, i) => `Item ${items.length + i + 1}`
        );
        resolve(newItems);
      }, 1000);
    });
  }, [items.length]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const newItems = await fetchItems();
      setItems((prev) => {
        const updated = [...prev, ...newItems];
        if (updated.length >= TOTAL_ITEMS) {
          setHasMore(false);
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  }, [fetchItems, hasMore, isLoading]);

  // Observe the sentinel div
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        root: document.querySelector("#scrollableContainer"),
        rootMargin: "50px 0px",
        threshold: 0.1, // Trigger when just 10% of the loader is visible
      }
    );

    const node = loaderRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Initial load
  useEffect(() => {
    if (items.length === 0 && !isLoading) {
      loadMore();
    }
  }, [items.length, loadMore, isLoading]);

  return (
    <div
      id="scrollableContainer"
      style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "10px",
        width: "250px",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{ height: "25px", borderBottom: "1px solid #eee" }}
        >
          {item}
        </div>
      ))}

      {hasMore && (
        <div ref={loaderRef} style={{ padding: "10px", textAlign: "center" }}>
          {isLoading ? "Loading..." : "Scroll for more"}
        </div>
      )}

      {!hasMore && (
        <div style={{ padding: "10px", textAlign: "center", color: "gray" }}>
          No more items
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollList;

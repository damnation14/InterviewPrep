import React, { useEffect, useState, useCallback, useMemo } from "react";

const makeUserNames = (user) => <div key={user.id}>{user.name}</div>; // Added key for list rendering

const debounce = (onChangeFunc, delay) => {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      onChangeFunc(...args);
    }, delay);
  };
};

const FetchApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = useCallback((query) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      });
  }, []);

  const debouncedFetchUsers = useMemo(
    () => debounce(fetchUsers, 3000),
    [fetchUsers]
  );

  useEffect(() => {
    if (searchQuery) {
      debouncedFetchUsers(searchQuery); // Call the debounced function with the search query
    }
  }, [searchQuery, debouncedFetchUsers]);

  const handleSearchQueryOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const userNames = users.map(makeUserNames);

  return (
    <>
      <input
        value={searchQuery}
        onChange={handleSearchQueryOnChange}
        placeholder="Search users..."
      />
      {loading ? <div>Loading...</div> : <div>{userNames}</div>}
    </>
  );
};

export default FetchApi;

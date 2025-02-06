import React, { useState, useEffect } from "react";

const withLoader = (Component) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 3000);
    }, []);

    return <Component isLoading={isLoading} {...props} />;
  };
};

export default withLoader;

import { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const toggleLoading = () => {
    setIsLoading((prevLoading) => !prevLoading);
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
    toggleLoading,
  };
};

export default useLoading;

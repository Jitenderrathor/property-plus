"use client";

import ClipLoader from "react-spinners/ClipLoader";

// 1. Move this OUTSIDE the component to prevent re-creation on every render
const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = () => {
  return (
    <ClipLoader
      size={150}
      color="#3B82F6" // 2. You can pass the string directly without {}
      aria-label="Loading Spinner"
      cssOverride={override}
    />
  );
};

export default LoadingPage;

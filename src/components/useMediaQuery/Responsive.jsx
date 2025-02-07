import React from "react";
import UseMediaQuery from "./UseMediaQuery";

const Responsive = () => {
  const isMobile = UseMediaQuery("(max-width:720px)");
  return (
    <div>
      <h1>Responsive</h1>
      <h2>{isMobile ? "Mobile view" : "Destop view"}</h2>
    </div>
  );
};

export default Responsive;

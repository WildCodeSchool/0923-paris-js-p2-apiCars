import React from "react";

function Banner(props) {
  const { url, description } = props;
  return (
    <div className="banner">
      <p>{url}</p>
      <p>{description}</p>
    </div>
  );
}

export default Banner;

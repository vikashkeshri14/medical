import React from "react";

export default function SlickPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a
      className={className}
      onClick={onClick}
    >
      <i
        class="fas fa-arrow-left"
        alt="Arrow Icon"
      ></i>
    </a>
  );
}

import React from "react";

export default function SlickNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a
      className={className}
      onClick={onClick}
    >
      <i
        class="fas fa-arrow-right"
        alt="Arrow Icon"
      ></i>
    </a>
  );
}

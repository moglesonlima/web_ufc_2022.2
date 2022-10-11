import React from "react";

const Hero2 = ({ name, image }) => {
  return (
    <div>
      <h2>Prof. {name}</h2>
      <div>
        <img width="150px" src={image} />
      </div>
    </div>
  );
};

export { Hero2 };

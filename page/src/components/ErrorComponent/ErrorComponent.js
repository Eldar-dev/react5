import React from "react";

import "./ErrorComponent.css";

const ErrorComponent = (errorData) => {
  for (let key in errorData) {
    let errorArr = errorData[key];

    const errorsMessage = errorArr.map((message, index) => {
      return (
        <li className="item-mist" key={index}>
          {message}
        </li>
      );
    });

    return <ul className="list-mist">{errorsMessage}</ul>;
  }
};

export default ErrorComponent;

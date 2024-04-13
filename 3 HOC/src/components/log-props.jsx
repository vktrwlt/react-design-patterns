import React from "react";

export const logProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};

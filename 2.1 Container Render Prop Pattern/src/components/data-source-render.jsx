import React from "react";
import { useEffect } from "react";

export const DataSourceRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = React.useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return <>{render(resource)}</>;
};

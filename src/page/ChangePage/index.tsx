import React from "react";
import { Redirect } from "react-router-dom";

const ChangePage: React.FC = () => {
  React.useEffect(() => {
    <Redirect to="in-the-world" />;
  }, []);
  return null;
};

export default ChangePage;

import React, { Fragment } from "react";
import { useGetUsersQuery } from "./context/api/userApi";
import Home from "./page/home/Home";

const App = () => {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export default App;

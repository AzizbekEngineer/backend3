import React, { Fragment } from "react";
import Users from "../../components/users/Users";
import CreateUsers from "../../components/createUsers/CreateUsers";

const Home = () => {
  return (
    <Fragment>
      <CreateUsers />
      <Users />
    </Fragment>
  );
};

export default Home;

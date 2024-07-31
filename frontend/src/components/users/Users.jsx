import React from "react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../context/api/userApi";
import "./users.scss";

const Users = () => {
  const { data } = useGetUsersQuery();
  const [handleDelete, { data: userData }] = useDeleteUserMutation();

  if (!data || !data.payload) return <div>Loading...</div>;

  const handleDeleteFunc = (id) => {
    if (window.confirm("ochirmoqchimisz")) {
      handleDelete(id);
    }
  };

  return (
    <div className="user container">
      <h2>Users</h2>
      <div className="user-cards">
        {data.payload.map((user) => (
          <div key={user._id} className="user-card">
            <img src={user.url} alt={user.fname} className="user-avatar" />
            <div className="user-info">
              <h3 className="user-name">{user.fname}</h3>
              <p className="user-username">@{user.username}</p>
              <p className="user-age">Age: {user.age}</p>
              <p
                className={`user-status ${
                  user.isActive ? "active" : "inactive"
                }`}
              >
                Status: {user.isActive ? "Active" : "Inactive"}
              </p>
              <div className="user-btns">
                <button>edit</button>
                <button onClick={() => handleDeleteFunc(user._id)}>
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

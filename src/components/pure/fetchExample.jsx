import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {
  getAllPagesUsers,
  getAllUsers,
  getUsersDetails,
  login,
} from "../../services/fetchServices";

const FetchExample = () => {
  const [users, setusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [totalUsers, setTotalUsers] = useState(12);
  const [usersPerPages, setUsersPerPages] = useState(6);
  const [pages, setPages] = useState(2);

  useEffect(() => {
    obatinUsers();
  }, []);

  const obatinUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("All users", response.data);
        setusers(response.data);
        setPages(response.total_pages);
        setUsersPerPages(response.per_page);
        setTotalUsers(response.total);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaing users: ");
        console.table(users);
      });
  };

  const obtainPagedUsers = (page) => {
    getAllPagesUsers(page)
      .then((response) => {
        console.log("All paged users", response.data);
        setusers(response.data);
        setPages(response.total_pages);
        setUsersPerPages(response.per_page);
        setTotalUsers(response.total);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaing users: ");
        console.table(users);
      });
  };

  const obtainUserDetails = (id) => {
    getUsersDetails(id)
      .then((response) => {
        console.log("All paged users", response.data);
        setSelectedUser(response.data);
      })
      .catch((error) => {
        alert(`Error while retreiving the user: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaing user: ");
        console.table(setSelectedUser);
      });
  };

  const authUser = () => {
    login("eve.holt@reqres.in", "cityslicka")
      .then((response) => {
        console.log("TOKEN", response.token);
        sessionStorage.setItem("Token", response.token);
      })
      .catch((error) => {
        alert(`Error while retreiving the user: ${error}`);
      })
      .finally(() => {
        console.log("Ended login user: ");
      });
  };

  return (
    <div>
      {/* Button to simulate login */}
      <button onClick={authUser}>Logearse</button>
      <h2>Users:</h2>
      <h2>Users:</h2>
      {users.map((user, index) => (
        <div key={index} onClick={() => obtainUserDetails(user.id)}>
          {user.first_name} {user.last_name}
        </div>
      ))}
      <p>
        Showing {usersPerPages} users of {totalUsers} in total.
      </p>
      <button onClick={() => obtainPagedUsers(1)}>1</button>
      <button onClick={() => obtainPagedUsers(2)}>2</button>
      <div>
        {selectedUser.id ? (
          <div>
            {console.log(selectedUser)}
            <h3>User detail</h3>
            <p>Name: {selectedUser.first_name}</p>
            <p>Last Name: {selectedUser.last_name}</p>
            <p>Email: {selectedUser.email}</p>
            <img
              alt="Avatar"
              src={selectedUser.avatar}
              style={{ height: "50px", width: "50px" }}
            ></img>
          </div>
        ) : (
          <h6>Please select to user for more info</h6>
        )}
      </div>
    </div>
  );
};

export default FetchExample;

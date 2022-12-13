import React, { useState, useEffect } from "react";
import getRandomUser from "../../services/axios.service";

const AxiosExample = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    obtainUser();
  }, []);

  const obtainUser = () => {
    getRandomUser()
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.results);
        }
        console.log(response);
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
      });
  };

  return (
    <div>
      <h1>AxiosExample</h1>
      {user != null ? (
        <div>
          {/* <img alt="avatar" src={user.picture.large}></img> */}
          <h2>
            {/* Name: {user.name.title} {user.name.first} {user.name.last} */}
          </h2>
          <h3>{user}</h3>
        </div>
      ) : (
        <div>
          <p>Gerenate a new user</p>
          <button onClick={obtainUser}>Random User</button>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;

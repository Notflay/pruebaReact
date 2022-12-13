export const getAllUsers = async () => {
  let response = await fetch("https://reqres.in/api/users");
  console.log("Response: ", response);
  console.log("Status: ", response.status);
  console.log("OK?", response.ok);
  //we pass the json
  return response.json();
};

export const getAllPagesUsers = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  console.log("Response: ", response);
  console.log("Status: ", response.status);
  console.log("OK?", response.ok);
  //we pass the json
  return response.json();
};

export const getUsersDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`);
  console.log("Response: ", response);
  console.log("Status: ", response.status);
  console.log("OK?", response.ok);
  //we pass the json
  return response.json();
};

export const login = async (email, password) => {
  let body = {
    email,
    password,
  };

  let response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    /*     mode: "no-cors",
    cache: "no-cache", */
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response.json();
};

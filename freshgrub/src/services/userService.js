// contains all things needed for server calling

import { myAxios } from "./helper";

//change the post api call according to backend
export const signUp = (signupData) => {
  return myAxios
    .post("/api/v1/users/save", signupData)
    .then((response) => response.data);
};

//change the post api call according to backend
export const login = (loginData) => {
  return myAxios
    .post("/api/v1/users/login", loginData)
    .then((response) => response.data);
};


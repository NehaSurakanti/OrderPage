//to check whether is logged in or not by checking localStorage

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data == null) {
    return false;
  } else {
    return true;
  }
};

//set data of the user to localstorage
export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//logout
//remove data from localStorage on logout
export const doLogot = (next) => {
  localStorage.removeItem("data");
  next();
};

//get current user data
export const getCurrentUserDetails = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return false;
  }
};

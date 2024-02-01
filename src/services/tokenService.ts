const token = () => {
  const getToken = localStorage.getItem("skillarena_token");
  return getToken;
};

const removeToken = () => {
  localStorage.removeItem("skillarena_token");
};

export { token, removeToken };

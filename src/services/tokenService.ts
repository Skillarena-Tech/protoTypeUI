const token = () => {
  const getToken = localStorage.getItem("skillarena_token");
  return getToken;
};

export { token };

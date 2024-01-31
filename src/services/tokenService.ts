const token = () => {
  const getToken = localStorage.getItem("token");
  return getToken;
};

export { token };

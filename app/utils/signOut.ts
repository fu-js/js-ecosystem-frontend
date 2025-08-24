export default () => {
  const accessToken = useCookie("access-token");
  accessToken.value = null;
};

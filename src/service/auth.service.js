var validate = function() {
  const auth_token = sessionStorage.getItem("auth_token");
  return !!auth_token;
}

module.exports = {
  validate: validate
}

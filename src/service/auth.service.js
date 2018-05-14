var validate = function() {
  console.log('in validate');
  const auth_token = sessionStorage.getItem("auth_token");
  const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth_token
        }
  return fetch('http://localhost:5000/api/auth/validate', {
    method: 'POST',
    headers: headers,
  })
  .then(response => response.json())
  .then(data => {
    console.log("in then");
    console.log(data);
    return true;
  })
}

module.exports = {
  validate: validate
}

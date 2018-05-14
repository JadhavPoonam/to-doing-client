var validate = function() {
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
  .then(data => true)
  .catch(err => false)
}

module.exports = {
  validate: validate
}

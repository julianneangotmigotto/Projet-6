const login = ({ email, password }) => {
  const data = JSON.stringify({ email, password })

  return fetch('http://localhost:5678/api/users/login', {
    method: 'post',
    body: data,
    headers: { 'Content-Type: application/json' }
  }).then(res => console.log(res))
}

const form = document.getElementById('login')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', async e => {
  e.preventDefault()

  await login({ email: email.value, password: password.value })
    .then(() => { })
})

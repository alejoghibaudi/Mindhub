import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/api/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      if(res.data.status){
        alert("Registered");
        return res.data.status
      }else{
        alert(res.data.error);
        return res.data.error
      }
    })
}
export const login = user => {
  return axios
    .post('http://localhost:5000/api/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.data + 'jpñasd');
      if (typeof response.data === 'string'){
      localStorage.setItem('usertoken', response.data)
      return response.data
      } else {
        console.log("password incorrect");
        alert("usuario o contraseña incorrectos")
      }
    })
    .catch(err => {
      console.log(err)
    })
}
 
export const profile = user => {
  return axios
    .get('http://localhost:5000/api/profile', {
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
import axios from 'axios';
import React from 'react';
import './styles.css';
import { history } from '../../history'

const Home = () => {
  
  // const handleLogout = (values: any) => {
  //   axios.post('http://localhost:8080/v1/api/auth', values)
  //     .then(resp => {
  //       const { data } = resp
  //       if (data) {
  //         localStorage.setItem('app-token', '')
  //         history.push('/home')
  //       }
  //     })
  // }
  

  return(
    <div>
      <h1>HOME???</h1>
      {/* <button onClick={handleLogout} className="ui-button ui-button--bordered-green ui-button--contained-green" type="submit">Logout</button> */}
    </div>
  )
}

export default Home;

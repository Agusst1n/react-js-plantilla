import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AgendaContext from '../../context/AgendaContext';
// import useFunctions from '../../hooks/useFunctions';

import styles from './Login.module.css'

function Login() {

  // const {handleChange,handleSubmitLogin} = useFunctions()
  const {handleChange,handleSubmitLogin} = useContext(AgendaContext)


  return <div className={styles.login_container}>
    <div className={styles.login_form}>
        <form className={styles.form} onSubmit={handleSubmitLogin}>
          <input type="text" placeholder='Enter your username' name='username' onChange={handleChange}/>
          <input type="text" placeholder='Enter your email' name='email' onChange={handleChange}/>
          <input type="text" placeholder='Enter your password' name='password' onChange={handleChange}/>
          <button type='submit'>Login</button>
          <Link to={'/register'} className={styles.register_link}>Registrate</Link>
        </form>
    </div>
  </div>;
}

export default Login;

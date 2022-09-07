import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AgendaContext from '../../context/AgendaContext';

import styles from './Register.module.css';

function Register() {


 const {handleChange,handleSubmitRegister} = useContext(AgendaContext)

  return (
    <div className={styles.register_page}>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmitRegister} className={styles.form}>
          <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Repeat password"
            name="password2"
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
          <Link to={'/login'} className={styles.login_link}>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;

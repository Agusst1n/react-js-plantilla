import { useState } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"

const AgendaContext = createContext()

const AgendaProvider = ({ children }) => {

  let navigate = useNavigate()


  const [modal, setModal] = useState(false)

  const [username, setUsername] = useState('')

  const [closeSesion, setCloseSesion] = useState(false)




  let KEY = 'AIzaSyDYj4knoiPhqMnEgFLj35Ob6ctLJTkQjzQ';

  const [user,setUser] = useState({
      username:'',
      email: '',
      password: '',
  })


  const getSesion = () =>{
    let userData = JSON.parse(localStorage.getItem('user'))
    let userName = localStorage.getItem('username')
    setUser(userData);
    setUsername(userName)
  }


  const registerData = async () => {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        }
      );
  
      const data = await res.json();
  
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('username', user.username);

      setUsername(user.username)
  
      navigate('/');
    };


  const loginData = async () =>{
      const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`,{
          method: 'POST',
          body: JSON.stringify({
              email: user.email,
              password: user.password,
              returnSecureToken: true
          })
      })

      const data = await res.json()

      navigate('/')

      console.log(data);

      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('username', user.username);
      setUsername(user.username)

  }

  const handleChange = (e) =>{
      console.log(e.target.value);

      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
   }

   const handleSubmitRegister = (e) =>{
      e.preventDefault();

      console.log(user);
  
      if (Object.values(user).includes('')) {
        console.log('campos vacios');
        return;
      } else if (user.password === user.password2) {
  
          registerData();
      } else {
        console.log('los campos no coinciden');
      }

      setCloseSesion(false)
   }

   const handleSubmitLogin = (e) =>{
      e.preventDefault();

      console.log(user);
  
      if (Object.values(user).includes('')) {
        console.log('campos vacios');
        return;
      } else if (user.password) {
  
          loginData();
      } else {
        console.log('los campos no coinciden');
      }
      setCloseSesion(false)
      
   }
    


    const handleClose = () =>{
      localStorage.clear()

      setUsername(null)
      setCloseSesion(true)
      setUser({
        username:'',
        email: '',
        password: '',
      })
      setModal(false)
      navigate('/login');

    }

   const handleModal = () =>{
     setModal(!modal)
   }



  return (
    <AgendaContext.Provider
      value={{
        modal,
        setModal,
        closeSesion,
        setCloseSesion,
        handleClose,
        user,
        username,
        setUser,
        getSesion,
        handleChange,
        handleSubmitRegister,
        handleSubmitLogin,
        handleModal
      }}
    >
      {children}
    </AgendaContext.Provider>
  )
}

export { AgendaProvider }

export default AgendaContext
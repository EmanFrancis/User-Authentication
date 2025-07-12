import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import './login.css'

export default function Login()
{

      interface User{
        userName: string,
        email: string,
        password: string

      }


     const [user, setUser] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
     );

     const handleSubmit = async (e: FormEvent) => {
       e.preventDefault();

       console.log(user);
       setUser({username:'',
                 email:'',
                 password:''
       });
       

     }

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
       setUser(prev => ({
      ...prev,
      [name]: value
         }));
     }



   return(
     <form onSubmit={handleSubmit}>

      

        {/* FORM */ }

        <p>Username</p>
        <input type="search" name="username" value={user.username}  onChange={handleInputChange}></input>

        <p>Email</p>
         <input type="search" name="email" value={user.email} onChange={handleInputChange}></input>

          <p>Password</p>
           <input type="password" name="password" value={user.password}onChange={handleInputChange}></input>

           <button>Login</button>
           <div className="options">
            <Link to="/signup">
           <a href="">Sign Up</a></Link>
           <a href="">Forgot Password?</a>
           </div>
     </form>
   )
}


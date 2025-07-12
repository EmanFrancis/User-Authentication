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

             {/* ICON */ }

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
        </svg>


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


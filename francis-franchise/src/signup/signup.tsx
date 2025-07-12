import { Link } from "react-router-dom"

export default function SignUp(){

  return( 
  
  <div className="SignUpContainer">
      <form className="formWrap">
        <p>FirstName</p>
         <input type="text"></input>
         <p>LastName</p>
         <input type="text"></input>
         <p>Email</p>
         <input type="text"></input>
         <p>Password</p>
         <input type="password"></input>
          <p>Confirm Password</p>
         <input type="password"></input>
         <button>Sign Up</button>
         <div className="options">
          <Link to ="/login">
         <a href="">Have an account already?</a>
         </Link>
         </div>

      </form>

  </div>)

}
   

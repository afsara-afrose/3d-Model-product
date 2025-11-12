import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, NavLink } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import PasswordInput from "../Components/PasswordInput";

const Register = () => {

   
    const handleRegister=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value
        
        const name=e.target.name.value;
        const photo=e.target.photo.value

        console.log(email,password,name,photo)
        console.log(password.length)

        //Password Validation
        if(password.length<6){
            toast.error('password should be at least 6 digit')
        }



       //regularExpression for password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        console.log(passwordRegex.test(password))

        if(!passwordRegex.test(password)){
            toast.error("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.")
            return;
        }



        createUserWithEmailAndPassword(auth, email, password)
        .then(res=>{
            console.log(res)
            toast.success('SignUp Successful')
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.message)
        })

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <form onSubmit={handleRegister} className="space-y-5">
          <h1 className="text-2xl text-center font-bold">Register Here!</h1>
          <div className="card-body">
            <fieldset className="fieldset">

             <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              <label className="label">PhotoUrl</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="photo Url"
              />
             <div >
                <PasswordInput></PasswordInput>
              </div>
              <div >
                <p  className="link link-hover ">Forgot password?
                <NavLink className='text-blue-600 font-bold ml-5' to={'/sign-in'}>Login</NavLink></p>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

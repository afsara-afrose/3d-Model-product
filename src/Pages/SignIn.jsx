import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";

const provider = new GoogleAuthProvider();
const SignIn = () => {
    const [user,setUser]=useState(null)
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        
        setUser(res.user)
        toast.success("successfully signed In");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        toast.error(error.code);
      });
  };

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider)
    .then(res=>{
        console.log(res)
        setUser(res.user)
    })
  }
  console.log(user)

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {
      toast.success('successfully signed out')
      setUser(null)
  
})
.catch((error) => {
    toast.error(error.message)

  
});

  }
  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
      {user?(
        <div className="space-y-3 text-center">
            <img src={user?.photoURL||'http://via.placeholder.com/88'} 
        className="h-20 w-20 rounded-full mx-auto"
        alt='' />
        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
        <button  onClick={handleSignOut} className='btn'>SignOut</button>
        </div>
        
      )
      :(<form onSubmit={handleSignIn} className="space-y-5">
          <h1 className="text-2xl text-center font-bold">Login now!</h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <p>
                  Forgot password?{" "}
                  <NavLink
                    className="font-semibold text-blue-600"
                    to={"/register"}
                  >
                    Register
                  </NavLink>
                </p>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>

                {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </fieldset>
          </div>
        </form>)
      }
        
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";

const Login = () => {
 
    return (
    <div className="page-background flex self-center align-middle justify-center">
      <div className="flex flex-col mx-auto xl:w-2/6 md:w-3/6 sm:w-3/6 w-full py-10 px-5 bg-white rounded-xl self-center justify-center align-middle">
         <form className="form-control">
        <div className="text-3xl w-full login-header">Login</div>
        <div className="welcome-text py-2">Welcome Back, We are Happy to see you again</div>

        <div className="m-3 w-5/6 mx-auto self-center justify-center">
          <label className="flex self-start justify-start pb-2">Username</label>
          <input type="text" className="mx-auto w-full input-text" />
        </div>

        <div className="flex self-center justify-center py-4">
        <button type="button" className="login-with-google-btn login-with-google-text rounded-2xl rounded-full">
            <i className="fa fa-google text-3xl"></i>Login with Google </button>
        </div>

       <div className="flex flex-row self-center justify-center py-2">
        <div className="text">Don't have an account</div>
        <div className="signup-text ml-2">Sign Up</div>
       </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

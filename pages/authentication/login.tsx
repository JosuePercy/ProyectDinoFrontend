import Link from "next/link";
import React from "react";
import LoginLayout from "../../components/layout/LoginLayout";

const Login = () => {
  return (
    <LoginLayout>
      <div className="container-register">
        <div className="register-machine">
          <div className="text-box">
            <span className="span-black">Star</span>
            <span className="span-blue">Admin</span>
          </div>
          <div className="sign">
            <h6>Sign in to continue.</h6>
          </div>

          <input
            className="inp-widht-register"
            type={"text"}
            placeholder="Username"
          />

          <input
            className="inp-widht-register-2"
            type={"text"}
            placeholder="Password"
          />
          <br />
          <Link className="link-dashboard" href={"/admin/dinosaurio"}>
            Ingresar
          </Link>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;

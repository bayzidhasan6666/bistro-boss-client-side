import React, { useContext, useEffect, useState } from 'react';
import image from '../../../assets/others/auth.png';
import './Login.css';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LogWith from '../../../Components/LogWith/LogWith';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success('Log In Successful');
      navigate(from, { replace: true });
    });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Login | Bistro Boss</title>
      </Helmet>
      <div className="hero background min-h-screen border shadow-xl my-10">
        <div className="hero-content flex-col md:flex-row">
          <div className="">
            <img className="h-[360px] rounded-2xl" src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h1 className="text-2xl text-center font-bold">
                  Login Please{' '}
                </h1>
                <label className="label">
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-2 border-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="p-2 border-2 "
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="type here"
                  className="p-2 border-2 "
                  onBlur={handleValidateCaptcha}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className={` ${
                    disabled ? 'bg-[#d19f545f]' : 'bg-teal-500'
                  } rounded font-semibold text-white py-2`}
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div>
              <p className="font-semibold text-center">
                Don't have an account?
                <Link to={`/signUp`} className="link link-accent">
                  Sign Up
                </Link>
              </p>
              <div>
                <h1 className="text-center font-semibold my-2">
                  Or, Login With
                </h1>
                <LogWith></LogWith>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;

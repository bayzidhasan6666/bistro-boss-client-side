import React, { useContext } from 'react';
import image from '../../../assets/others/auth.png';
import './../Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import LogWith from '../../../Components/LogWith/LogWith';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Provider/AuthProvider';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);

        updateUserProfile(data.name, data.photoUrl) // Pass name and photoUrl to updateUserProfile
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              photoUrl: data.photoUrl,
            };
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success('User Sign Up Successfully');
                }
              });
            reset();
            navigate('/');
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          toast.error('Email is already in use');
        }
        reset();
      });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Bistro Boss</title>
      </Helmet>
      <div className="hero background min-h-screen border shadow-xl my-10">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="">
            <img className="h-[360px] rounded-2xl" src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <h1 className="text-2xl text-center font-bold">
                  Sign Up Please
                </h1>
                <label className="label">
                  <span className="font-semibold">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="p-2 border-2"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <span className="text-red-400 italic">Name is required!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo photoUrl"
                  className="p-2 border-2"
                  {...register('photoUrl', { required: true })}
                />
                {errors.photoUrl && (
                  <span className="text-red-400 italic">
                    photoUrl is required!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-2 border-2"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400 italic">
                    Email is required!
                  </span>
                )}
              </div>

              {/* ---------------------Password Validation Start------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="p-2 border-2"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                  })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <span className="text-red-400 italic">
                    Password is required.
                  </span>
                )}
                {watch('password') && (
                  <div className="">
                    <h3 className="text-green-400 mt-2  font-semibold">
                      Create a Secure Password :
                    </h3>
                    {watch('password').length < 6 && (
                      <span className="text-red-400 ">
                        <ul>
                          <li>
                            • Password must be at least 6 characters long.
                          </li>
                        </ul>
                      </span>
                    )}
                    {watch('password').length >= 6 &&
                      watch('password').length <= 20 && (
                        <span className="text-green-400 ">
                          <ul>
                            <li>
                              • Password length should be between 6 and 20
                              characters.
                            </li>
                          </ul>
                        </span>
                      )}
                    {watch('password').length >= 20 && (
                      <span className="text-red-400 ">
                        <ul>
                          <li>
                            • Password must be less than 20 characters long.
                          </li>
                        </ul>
                      </span>
                    )}
                    {!/(?=.*[a-z])/.test(watch('password')) && (
                      <span className="text-red-400 ">
                        <ul>
                          <li>
                            • Password must contain at least one lowercase
                            letter.
                          </li>
                        </ul>
                      </span>
                    )}
                    {/(?=.*[a-z])/.test(watch('password')) && (
                      <span className="text-green-400 ">
                        <ul>
                          <li>• Password contains a lowercase letter.</li>
                        </ul>
                      </span>
                    )}
                    {!/(?=.*[A-Z])/.test(watch('password')) && (
                      <span className="text-red-400 ">
                        <ul>
                          <li>
                            • Password must contain at least one uppercase
                            letter.
                          </li>
                        </ul>
                      </span>
                    )}
                    {/(?=.*[A-Z])/.test(watch('password')) && (
                      <span className="text-green-400 ">
                        <ul>
                          <li>• Password contains an uppercase letter.</li>
                        </ul>
                      </span>
                    )}
                    {!/(?=.*\d)/.test(watch('password')) && (
                      <span className="text-red-400 ">
                        <ul>
                          <li>• Password must contain at least one digit.</li>
                        </ul>
                      </span>
                    )}
                    {/(?=.*\d)/.test(watch('password')) && (
                      <span className="text-green-400 ">
                        <ul>
                          <li>• Password contains a digit.</li>
                        </ul>
                      </span>
                    )}
                    {!/(?=.*[!#$%&@? ])/.test(watch('password')) && (
                      <span className="text-red-400 ">
                        <ul>
                          <li>
                            • Password must contain at least one special
                            character (e.g., !, #, $, %, &, ?, or space).
                          </li>
                        </ul>
                      </span>
                    )}
                    {/(?=.*[!#$%&@? ])/.test(watch('password')) && (
                      <span className="text-green-400 ">
                        <ul>
                          <li>• Password contains a special character.</li>
                        </ul>
                      </span>
                    )}
                  </div>
                )}
              </div>
              {/* --------------------password validation end---------------- */}
              <div className="form-control mt-6">
                <input
                  className={` bg-teal-500
                 rounded font-semibold text-white py-2`}
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div>
              <p className="font-semibold text-center">
                Already have an account?
                <Link to={`/login`} className="link link-accent">
                  Sign In
                </Link>
              </p>
              <div className="">
                <h1 className="text-center font-semibold my-2">
                  Or, Sign Up With
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

export default SignUp;

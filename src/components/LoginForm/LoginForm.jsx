
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './LoginForm.module.css';

import { logIn } from '../../redux/auth/operations';

import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegExp = /^(?=.*[A-Z]).{8,}$/;

const loginSchema = Yup.object().shape({
    email: Yup.string().required("This field is required").matches(emailRegExp, "Invalid email address"),
    password: Yup.string().required("This field is required")
    .min(8, "Must be at least 8 characters long")
    .matches(passwordRegExp, "Contain at least 1 uppercase letter"),
});



const LoginForm = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   )
  //     .unwrap()
  //     .then(() => {
  //       console.log('login success');
  //     })
  //     .catch(() => {
  //       console.log('login error');
  //     });

  //   form.reset();
  // };

  // const handleSubmit = (event) => {
  //   console.log("handleSubmit called!");
  //   event.preventDefault();
  //   onAdd({    
  //     email: event.target.elements.email.value,
  //     password: event.target.elements.password.value,
  //   });

  //   event.target.reset();
  // };
  
  
  
  const [showPassword, setShowPassword] = useState(false);
  
    const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = data => {
    console.log(data);
    // dispatch(logIn(data));
    reset();
  } 


  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign in</h1>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        
      <label className={css.label}>        
        <input
          {...register("email")}
          placeholder="Email"
          className={css.input}
        />
      </label>
      <div className={css.error} >
        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
      </div>
        
        <label className={css.label}>
          <div className={css.passwordContainer}>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={css.input}
            />
            <button
              type="button"
              onClick={toggleVisibility}
              className={css.toggleButton}
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
      </label>
      <div className={css.error} >
        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
      </div>
        
        <input className={css.btn} type="submit" value="Log In" disabled={!isValid}/>
      </form>
      <div className={css.linkSign}>
      <p>Forgotten your password?</p>
      <NavLink className={buildLinkClass} to="/">Click here to reset</NavLink>
      </div>
      <div className={css.linkSign}>
      <p>No Account?</p>
        <NavLink className={buildLinkClass} to="/register">Register now</NavLink>
        </div>
      </div>
  );
};

export default LoginForm;

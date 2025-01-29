
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './RegisterForm.module.css';

import { register } from '../../redux/auth/operations';

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

const registerSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("This field is required").min(3, "Must be at least 3 characters long"),
    lastName: Yup.string().trim().required("This field is required").min(3, "Must be at least 3 characters long"),
    email: Yup.string().required("This field is required").matches(emailRegExp, "Invalid email address"),
    password: Yup.string().required("This field is required")
    .min(8, "Must be at least 8 characters long")
    .matches(passwordRegExp, "Contain at least 1 uppercase letter"),
    repeatPassword: Yup.string().required("This field is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    
});
  
// ======================

// const loginSchema = Yup.object({
//   email: Yup.string()
//     .required('Email is required!')
//     .matches(emailRegExp, 'Entered email address is not valid')
//     .email('Please enter a valid email address!'),
//   password: Yup.string()
//     .required('Password is required!')
//     .min(minPasswordLength, 'Too short')
//     .max(maxPasswordLength, 'Too long'),
// });
// =======================

const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   dispatch(
  //     register({
  //       firstName: form.elements.firstName.value,
  //       lastName: form.elements.lastName.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );

  //   form.reset();
  // };

  // ==================hookForm =========

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = data => {
    console.log(data);
    // dispatch(register(data));
    reset();
  } 

  // =============================
return (
    <div className={css.container}>
      <h1>Register a New account</h1>
    <form className={css.form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      
        <label className={css.label}>         
          <input
            {...register("firstName")}
            placeholder="First name"
            className={css.input}
            />
      </label>
      <div className={css.error}>
        {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
      </div>

        <label className={css.label}>        
        <input
          {...register("lastName")}
          placeholder="Last name"
          className={css.input}
        />
      </label>
      <div className={css.error} >
        {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
      </div>

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

        <label className={css.label}>
          <div className={css.passwordContainer}>
            <input
              {...register("repeatPassword")}
              type={showPassword ? "text" : "password"}
              placeholder="Repeat Password"
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
        {errors?.repeatPassword && <p>{errors?.repeatPassword?.message || "Error!"}</p>}
      </div>
        <input className={css.btn} type="submit" value="Register" disabled={!isValid}/>
        {/* <button className={css.btn} type="submit" disabled={!isValid}>
          Register
        </button> */}
      </form>

    <div className={css.linkSign}>
      <p>Already have an account?</p>
      <NavLink className={buildLinkClass} to="/login" >
        Sign in
      </NavLink>
      </div>
    </div>
  );
};

export default RegisterForm;

// disabled={!isValid}

  // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
  // message: "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter and 1 number"
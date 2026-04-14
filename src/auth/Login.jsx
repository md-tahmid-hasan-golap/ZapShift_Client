import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Success Alert
  const showSuccessAlert = (message) => {
    Swal.fire({
      title: "Welcome Back!",
      text: message,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // Error Alert
  const showErrorAlert = (message) => {
    Swal.fire({
      title: "Login Failed!",
      text: message,
      icon: "error",
      confirmButtonColor: "#ef4c53",
    });
  };

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        showSuccessAlert("Login Successful!");
        navigate("/"); // লগইন শেষে হোম পেজে নিয়ে যাবে
      })
      .catch((error) => {
        console.log(error);
        showErrorAlert("Invalid email or password. Please try again.");
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        showSuccessAlert("Signed in with Google!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        showErrorAlert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Login Now</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            {/* Email Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-error text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters required" },
                })}
                className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
                placeholder="Enter password"
              />
              {errors.password && (
                <span className="text-error text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
              <label className="label mt-1">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-blue-500"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-2">
              <button className="btn btn-neutral w-full">Login</button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-gray-400">OR</div>

          {/* Social Login */}
          <button
            onClick={handleSignInWithGoogle}
            type="button"
            className="btn btn-outline btn-block flex items-center gap-2"
          >
            <FcGoogle size={20} />
            Sign In With Google
          </button>
        </div>

        <p className="text-center pb-6 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

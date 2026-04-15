import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Link, useNavigate } from "react-router"; // useNavigate যোগ করা হয়েছে
import Swal from "sweetalert2"; // SweetAlert2 ইম্পোর্ট
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Register = () => {
  const { creatUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate(); // রেজিস্ট্রেশন শেষে নেভিগেট করার জন্য

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // সফল মেসেজ ফাংশন
  const showSuccessAlert = (message) => {
    Swal.fire({
      title: "Success!",
      text: message,
      icon: "success",
      confirmButtonColor: "#1d232a", // আপনার থিমের সাথে মিল রেখে
    });
  };

  // এরর মেসেজ ফাংশন
  const showErrorAlert = (message) => {
    Swal.fire({
      title: "Error!",
      text: message,
      icon: "error",
      confirmButtonColor: "#ef4c53",
    });
  };

  const handelRegister = (data) => {
    console.log(data.photo[0]);
    const profileImg = data.photo[0];
    creatUser(data.email, data.password)
      .then((result) => {
        // user photo URL
        const formData = new FormData();
        formData.append("image", profileImg);
        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
        axios.post(imageApiUrl, formData).then((res) => {
          console.log("ufter image upload", res.data.data.url);
        });

        // upadte user profile

        const userProfile = {
          displayName: data.name,
          photoURL: res.data.data.url,
        };
        updateUserProfile(userProfile)
          .then((result) => {
            console.log("user update", result);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(result.user);
        showSuccessAlert("Registration Successful!");
        navigate("/"); // সফল হলে হোম পেজে নিয়ে যাবে
      })
      .catch((error) => {
        console.log(error);
        showErrorAlert(error.message);
      });
  };

  const handelSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        showSuccessAlert("Google Sign-In Successful!");
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
          <h2 className="text-2xl font-bold text-center mb-4">Register Now</h2>

          <form onSubmit={handleSubmit(handelRegister)}>
            {/* Name Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
                placeholder="Enter your email"
              />
              {errors.name && (
                <span className="text-error text-xs mt-1 italic">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* Photo Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Photo</span>
              </label>
              <input
                type="file"
                accept="image/*" // শুধুমাত্র ইমেজ ফাইল সিলেক্ট করার জন্য
                {...register("photo", { required: "Photo is required" })} // মেসেজ ঠিক করা হয়েছে
                className={`file-input file-input-bordered w-full ${errors.photo ? "file-input-error" : ""}`} // DaisyUI file-input ক্লাস ব্যবহার করা হয়েছে
              />
              {errors.photo && ( // errors.name এর বদলে errors.photo হবে
                <span className="text-error text-xs mt-1 italic">
                  {errors.photo.message}
                </span>
              )}
            </div>
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
                <span className="text-error text-xs mt-1 italic">
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
                <span className="text-error text-xs mt-1 italic">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Register Button */}
            <div className="form-control mt-2">
              <button className="btn btn-neutral w-full">Register</button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-gray-400">OR</div>

          {/* Social Login */}
          <button
            onClick={handelSignInWithGoogle}
            type="button" // form-এর বাইরে তাই type="button" দেওয়া ভালো
            className="btn btn-outline btn-block flex items-center gap-2"
          >
            <FcGoogle size={20} />
            Sign In With Google
          </button>
        </div>
        <p className="text-center pb-6 text-sm">
          Already Have An Account?{" "}
          <Link to="/login" className="text-blue-500 underline font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

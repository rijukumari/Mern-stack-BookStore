import React, { useRef } from "react";
import { Link, Navigate,useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios"

function Singup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.form?.pathname || '/'
  const loginModalRef = useRef(null);

  const openLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.showModal();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
//  await axios.post("http://localhost:3000/user/singup",userInfo)
 await axios.post(`${import.meta.env.VITE_BACKEND_LINK}/user/singup`,userInfo)
  .then((res)=>{
    console.log(res.data);
    if(res.data){
      toast.success('Singup Successfully');
      navigate(from,{replace:true})
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user))
  }).catch((err)=>{
    if(err.response){
      console.log(err);
       toast.error('Error: ' + err.response.data.message);
    }
    
  })
}

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[500px] border-[2px] shadow-md p-5 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost relative left-[96%] bottom-3"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 border rounded-md outline-none p-2"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 border rounded-md outline-none p-2"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 border rounded-md outline-none p-2"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 py-2 px-4 text-white rounded-md hover:bg-pink-800 duration-200">
                Signup
              </button>
              <p>
                Have Account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={openLoginModal}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Actual Login Modal */}
      <Login ref={loginModalRef} />
    </>
  );
}

export default Singup;

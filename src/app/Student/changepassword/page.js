// "use client";
// import React,{useState} from "react";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { asynchangepassword } from "@/Store/Actions/StudentActions";
// import { useDispatch } from "react-redux";

// const Changepassword = () => {
//   const dispatch = useDispatch();
//   const { student } = useSelector((state) => state.StudentSlice);
//   console.log(student)
//   const [password,setpassword] = useState('');
//   const [Conpassword,setConpassword] = useState('')
//   const [error , seterror] = useState("")

//   const handlepassword = (e) => {
//     e.preventDefault();
    
//     if(password === Conpassword){
//       seterror("")
//         dispatch(asynchangepassword(password));
//     } 
//     if(password !== Conpassword){
//       seterror("password not match")
//   } 
    
//   };

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center">
//       <h1 className=" text-2xl ">Change Your Password</h1>
//        <form method="POSt" className="text-center" onSubmit={handlepassword}>
//         <input className="mt-6 w-80 block bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setpassword(e.target.value)} />
//         <input className="mt-6 w-80 block bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
//         type="password" 
//           name="Conformpassword" 
//           placeholder="Conform Password"
//           value={Conpassword}
//           onChange={(e) => setConpassword(e.target.value)} />
//           {error &&( 
//             <p>{error}</p>
//           ) }
//           <button className="px-5 py-3 bg-blue-600 text-white rounded-lg" type=" submit"> Change Password</button>
//        </form>
       
//     </div>
//   );
// };

// export default Changepassword;

"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { asynchangepassword } from "@/Store/Actions/StudentActions";
import { useDispatch } from "react-redux";

const Changepassword = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.StudentSlice);

  const [password, setPassword] = useState("");
  const [Conpassword, setConPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (password === Conpassword) {
      setError("");
      dispatch(asynchangepassword(password));
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="w-full h-full pt-14 flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Change Your Password</h1>
      <form method="POST" className="w-full max-w-sm text-center" onSubmit={handlePasswordChange}>
        <input
          className="mt-4 w-full block bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none"
          placeholder="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="mt-4 w-full block bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none"
          placeholder="Confirm Password"
          type="password"
          value={Conpassword}
          onChange={(e) => setConPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          className="mt-6 w-full px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Changepassword;

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const PasswordInput = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-1">
        Password
      </label>
      <input
        type={show ? "text" : "password"}
        name="password"
        placeholder="Enter password"
        className="input input-bordered w-full bg-white/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <span
        onClick={() => setShow(!show)}
        className="absolute right-3 top-[38px] cursor-pointer text-black"
      >
        {show ? <IoEyeOff size={18} /> : <FaEye size={18} />}
      </span>
    </div>
  );
};

export default PasswordInput;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaClover } from "react-icons/fa6";
import "../styles/animations.css";

type Inputs = {
  username: string;
  pass: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full md:w-[600px] z-10 m-2 bg-[#161616fb] rounded-lg flex justify-center items-center flex-col">
        <div className="text-green-600 mt-2 animate-spin-glow">
          <FaClover className="h-[60px] w-[60px]" />
        </div>
        <div className="text-[#FFF113] font-lilita text-[34px]">
          El tebrol de la suerte
        </div>
        <div className="text-[#FFF113]">Inicia sesión para acceder a tu cuenta</div>
        <form
          className="w-full flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="px-8 space-y-6 mt-6">
            <div className="w-full flex flex-col gap-1 ">
              <div className="text-white font-semibold">Usuario</div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LuUser className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  placeholder="Usuario"
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  {...register("username")}
                />
              </div>
            </div>
            {/*Contrase'a*/}
            <div className="w-full flex flex-col gap-1 ">
              <div className="text-white font-semibold">contraseña</div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TbPasswordFingerprint className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  {...register("pass")}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
            <div className="pb-6 pt-2">
              <button 
                type="submit" 
                className="w-full h-[42px] bg-green-700 rounded-lg text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
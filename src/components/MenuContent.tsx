import { TbTicketOff, TbChartInfographic } from "react-icons/tb";
import { GiRingBox, GiExitDoor } from "react-icons/gi";
const MenuContent = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center z-10 gap-2">
        
        <div className="p-2 rounded-lg  bg-[#161616fb] flex flex-col justify-center items-center gap-1 mt-2">
          <div className="text-white text-2xl border-b pb-2">Jesus Aguilar</div>
          <div className="text-white text-2xl">Mazatlan</div>
        </div>
        <div className="text-white  bg-green-700 p-3 rounded-lg text-2xl mb-2">
          {" "}
          Mensaje de prueba inicial{" "}
        </div>

        <div className="w-full flex flex-col gap-3 px-4 md:px-60">
          <div className="w-full flex flex-col gap-3">
            <div className="relative w-full">
              <button className="text-white bg-yellow-700 w-full p-4 text-2xl rounded-lg">
                Boletos
                <TbTicketOff className="text-white h-[30px] w-[30px] absolute top-[25%] left-[15%]" />
              </button>
            </div>
            <div className="relative w-full">
              <button className="text-white bg-cyan-600 w-full p-4 text-2xl rounded-lg">
                Ventas del dia
                <TbChartInfographic className="text-white h-[30px] w-[30px] absolute top-[25%] left-[15%]" />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="relative">
              <button className="text-white bg-violet-500 w-full p-4 text-2xl rounded-lg">
                Cortes de caja
                <GiRingBox className="text-white h-[30px] w-[30px] absolute top-[25%] left-[15%]" />
              </button>
            </div>
            <div className="relative">
              <button className="text-white bg-red-700 w-full p-4 text-2xl rounded-lg">
                Salir
                <GiExitDoor className="text-white h-[30px] w-[30px] absolute top-[25%] left-[15%]" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-green-700 rounded-full flex justify-center items-center text-white text-2xl mt-2 mb-2">
          Puntos :1000
        </div>
      </div>
    </>
  );
};
export default MenuContent;

import { TbTicketOff, TbChartInfographic } from "react-icons/tb";
import { GiRingBox, GiExitDoor } from "react-icons/gi";
const MenuContent = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center z-10 gap-2">
        <div className="p-2 rounded-lg  bg-[#161616fb] flex flex-col justify-center items-center gap-1">
          <div className="text-white text-2xl border-b pb-2">Jesus Aguilar</div>
          <div className="text-white text-2xl">Mazatlan</div>
        </div>
        <div className="text-white bg-[#12f76675] p-2 rounded-lg text-2xl">
          {" "}
          Mensaje de prueba inicial{" "}
        </div>

        <div className="w-full flex flex-col gap-3 p-4">
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
      </div>
    </>
  );
};
export default MenuContent;

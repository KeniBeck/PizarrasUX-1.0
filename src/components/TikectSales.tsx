import { useState } from "react";
import { BiCalendar, BiHash, BiPlus, BiUser } from "react-icons/bi";
import { FaClover, FaDollarSign } from "react-icons/fa6";
import { CgServerless } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";


const TicketSales = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [fecha] = useState("01/01/1970");
  const [prizes] = useState({
    Primerpremio: "1,000,000",
    Segundopremio: "Iphone 5",
  });
  return (
    <>
      <div className="w-full">
        {/* Header */}
        <div className="w-full text-center px-2 ">
          <div className="flex flex-row z-10 items-center gap-6 text-center mb-1">
            <div className="text-green-600  animate-spin-glow">
              <FaClover className="h-[60px] w-[60px]" />
            </div>
            <div className="text-[#FFF113] font-lilita text-[30px]">
              El tebrol de la suerte
            </div>
          </div>

          {/* Prize Info Cards */}
          <div className="w-full mb-3">
            <div className="bg-[#161616fb] backdrop-blur-sm p-4 rounded-xl border border-neutral-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-2">
                  <BiCalendar className="w-5 h-5 text-green-500" />
                  <span className="text-white">Sorteo: {fecha}</span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-around">
                <div className="text-center">
                  <p className="text-sm text-neutral-400">Primer Premio</p>
                  <p className="text-lg text-white">{prizes.Primerpremio}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-neutral-400">Segundo Premio</p>
                  <p className="text-lg text-white">{prizes.Segundopremio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Form */}
          <div className="space-y-4 px-12 ">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <BiHash className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="text"
                placeholder="Número de Boleto"
                className="w-full pl-10 pr-4 py-3 bg-gray-300 border border-neutral-700 rounded-lg  placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value)}
                maxLength={3}
              />
              <button className="absolute inset-y-0 right-3 flex items-center">
                <BiPlus className="h-5 w-5 text-green-500 hover:text-green-400" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <FaDollarSign className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="text"
                placeholder="Precio"
                className="w-full pl-10 pr-4 py-3 bg-gray-300 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value.replace(/[^0-9]/g, ""))
                }
                maxLength={4}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <BiUser className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="text"
                placeholder="Nombre del Cliente"
                className="w-full pl-10 pr-4 py-3 bg-gray-300 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-2 mt-4 mb-2 px-2">
            <div className="relative">
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                Venta Normal
                <FaDollarSign className="h-5 w-5 absolute top-[30%] left-[20%]" />
              </button>
            </div>
            <div className="relative">
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                Venta en Serie
                <CgServerless className="h-5 w-5 absolute top-[30%] left-[20%]" />
              </button>
            </div>
            <div className="relative">
              <button className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors">
                Revisar Boletos
                <FaRegEye className="h-5 w-5 absolute top-[30%] left-[20%]" />
              </button>
            </div>
            <div className="relative">
            <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              Regresar al Inicio
              <HiMiniArrowLeftStartOnRectangle className="h-5 w-5 absolute top-[30%] left-[20%]" />
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Home Button */}
    </>
  );
};
export default TicketSales;

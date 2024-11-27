import { BsTicket } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";

const TypeDraw = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 mt-2">
        <div className="space-y-4 m-2">
          {/* Today's Draw */}
          <button className="w-full bg-[#161616fb] backdrop-blur-sm hover:bg-black transform hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl group">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                <BsTicket className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-left flex-1">
                <h2 className="text-2xl font-bold text-gray-100 mb-1">
                  Sorteo de Hoy
                </h2>
                <p className="text-lg text-gray-50">
                  Participa en el sorteo actual
                </p>
              </div>
              <div className="text-yellow-500 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </button>

          {/* Special Draw */}
          <button className="w-full bg-[#161616fb] backdrop-blur-sm hover:bg-black transform hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl group">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                <FaCalendar className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-left flex-1">
                <h2 className="text-2xl font-bold text-gray-100 mb-1">
                  Sorteo Especial
                </h2>
                <p className="text-lg text-gray-50">
                  Grandes premios y eventos especiales
                </p>
              </div>
              <div className="text-yellow-500 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default TypeDraw;

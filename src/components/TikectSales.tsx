import { useState } from "react";
import { BiCalendar, BiHash, BiHome, BiPlus, BiUser } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";

const TicketSales = () => {
    const [ticketNumber, setTicketNumber] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [fecha] = useState('01/01/1970');
    const [prizes] = useState({ Primerpremio: '1,000,000', Segundopremio: 'Iphone 5' });
    return (
      <>
        <div className="min-h-full z-10">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center ">
          <h1 className="text-2xl font-bold text-white mb-6">Venta de Boletos</h1>
          
          {/* Prize Info Cards */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BiCalendar className="w-5 h-5 text-red-500" />
                  <span className="text-white">Sorteo: {fecha}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <BiHash className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="text"
                placeholder="Número de Boleto"
                className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={price}
                onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ''))}
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
                className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mt-8">
            <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              Venta Normal
            </button>
            <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              Venta en Serie
            </button>
            <button className="w-full py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors">
              Revisar Boletos
            </button>
          </div>
        </div>
      </div>

      {/* Home Button */}
      <button
    
        className="fixed bottom-6 right-6 p-4 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-colors"
      >
        <BiHome className="w-6 h-6" />
      </button>
    </div>
      </>
    );
}
export default TicketSales;
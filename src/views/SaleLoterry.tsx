import { GiClover } from "react-icons/gi";
import TicketSales from "../components/TikectSales";

const SaleLoterry = () => {
  return (
    <>
      <div className="w-full h-full  flex flex-col justify-center items-center relative">
        <GiClover className="w-[400px] h-[400px] fixed left-[-135px] top-[-60px] text-[#1d1d1d]" />
        <div className="z-10 w-full">
          <TicketSales />
        </div>
      </div>
    </>
  );
};
export default SaleLoterry;

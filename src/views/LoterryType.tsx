import { GiClover } from "react-icons/gi";
import { PiCloverDuotone } from "react-icons/pi";
import "../styles/animations.css";
import TypeDraw from "../components/TypeDraw";
const LoterryType = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        <GiClover className="w-[400px] h-[400px] fixed left-[-135px] top-[-60px] text-[#1d1d1d]" />
        <div className="flex flex-col z-10 items-center gap-1">
          <PiCloverDuotone className="text-[104px] text-green-700 animate-glow" />
          <div className="text-[#FFF113] font-lilita text-[42px]">
            El tebrol de la suerte
          </div>
          <div className="text-green-200 text-xl">
            Selecciona el tipo de lotería
          </div>
        </div>
        <TypeDraw />
      </div>
    </>
  );
};
export default LoterryType;

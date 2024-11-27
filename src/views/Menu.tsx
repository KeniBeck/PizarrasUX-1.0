import { FaClover } from "react-icons/fa6";
import { GiClover } from "react-icons/gi";
import MenuContent from "../components/MenuContent";

const Menu = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center relative">
        <GiClover className="w-[400px] h-[400px] fixed left-[-135px] top-[-60px] text-[#1d1d1d]" />
        <div className="flex flex-row z-10 items-center gap-1">
          <div className="text-green-600  animate-spin-glow">
            <FaClover className="h-[60px] w-[60px]" />
          </div>
          <div className="text-[#FFF113] font-lilita text-[30px]">
            El tebrol de la suerte
          </div>
        </div>
        <MenuContent />
      </div>
    </>
  );
};
export default Menu;

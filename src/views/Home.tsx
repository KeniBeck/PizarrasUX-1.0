import { GiClover } from "react-icons/gi"
import LoginForm from "../components/LoginForm";
const Home = () =>{
    return(
    <>
    <div className="w-full h-screen bg-[#262626] flex justify-center items-center relative">
    <GiClover className="w-[400px] h-[400px] fixed left-[-135px] top-[-60px] text-[#1d1d1d]"/>
    <LoginForm/>
    </div>
    </>
    );
}
export default Home;
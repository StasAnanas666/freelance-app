import { Loginbtn } from "../../../../UI/buttons/Loginbtn";
import { Leftmenu } from "./Leftmenu";

export const Headnav = () => {
  return (
    <nav className=" bg-yaOrange  py-3 sm:bg-transparent sm:py-0 w-full sm:w-fit flex gap-4 sm:gap-8 md:gap-16 text-md md:text-xl items-center flex-nowrap justify-between sm:justify-normal">
      <div className="sm:hidden px-4 ">
        <Leftmenu />
      </div>
      <div className="flex sm:hidden items-center gap-3 px-3">
        <h1 className="text-white text-right text-xl font-bold whitespace-nowrap">
          Enchanting <br />
          Freelance
        </h1>
        <img
          src={require("@assets/logo.png")}
          alt=""
          className="w-12 h-full object-cover"
        />
      </div>

      <ul className="hidden sm:flex gap-4 md:gap-6">
        <li>
          <button>Исполнителю</button>
        </li>
        <li>
          <button>Заказчику</button>
        </li>
        <li>
          <button>О нас</button>
        </li>
      </ul>
      <div className="hidden sm:flex relative animate-pulse hover:scale-105 transition-all  bg-yaOrange text-white rounded-xl w-20 md:w-24 h-8 md:h-10 overflow-hidden">
        <Loginbtn />
      </div>
    </nav>
  );
};

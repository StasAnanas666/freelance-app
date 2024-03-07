import { useDispatch, useSelector } from "react-redux";
import { Loginbtn } from "../../../../UI/buttons/Loginbtn";
import { Leftmenu } from "./Leftmenu";
import { setMenu } from "../../../../feature/userSlice/userSlice";

export const Menu = () => {
  const dispatch = useDispatch();
  const menuToggle = useSelector((state) => state.userStates.menuModal);
  if (menuToggle) {
    return (
      <div
        id="leftMenuBar"
        className="absolute w-full h-full z-40 left-0 bg-yaPurple flex flex-col justify-between"
      >
        <div className="absolute z-50 bottom-0 right-0 -translate-x-8 -translate-y-8 bg-yaDark rounded-full h-14 w-14 flex items-center justify-center cursor-pointer animate-pulse">
          <Leftmenu />
        </div>
        <div className=" text-white">
          <div
            id="userMenuLogo"
            className="py-4  font-semibold text-xl text-center bg-yaDark-medium"
          >
            <p>Меню пользователя</p>
          </div>
          <ul className="flex flex-col gap-3 px-6 mt-6">
            <li className="box  bg-yaDark-medium hover:bg-yaDark-light cursor-pointer shadow-md text-center font-semibold px-2 py-3 rounded-t">
              <div className="">
                <p>Исполнителю</p>
              </div>
            </li>
            <li className="box bg-yaDark-medium hover:bg-yaDark-light cursor-pointer shadow-md text-center font-semibold px-2 py-3">
              <div className="">
                <p>Заказчику</p>
              </div>
            </li>
            <li className="box bg-yaDark-medium hover:bg-yaDark-light cursor-pointer shadow-md text-center font-semibold px-2 py-3 ">
              <div className="">
                <p>О нас</p>
              </div>
            </li>
            <li
              onClick={() => dispatch(setMenu(!menuToggle))}
              className="box bg-yaDark-medium hover:bg-yaDark-light cursor-pointer shadow-md text-center font-semibold px-2 py-3 rounded-b"
            >
              <Loginbtn />
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

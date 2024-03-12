import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "./Addons/Menu";
import { useEffect, useState } from "react";

const Header = () => {
    const [balance, setBalance] = useState("");
    const person = useSelector((state) => state.personState.currentPerson);

    useEffect(() => {
        if (person.length > 0) {
            setBalance(person[0].balance);
        }
    }, [person]);

    return (
        <section className="bg-yaDark text-gray-200 ">
            <div className=" mx-auto">
                <div className="flex justify-between px-8 py-3 ">
                    <div className="flex gap-2">
                        <Link
                            to={"/author"}
                            className="cursor:pointer flex items-center gap-2 border-gray-500 border-opacity-75 sm:border-r-2  pr-3"
                        >
                            <img
                                src={require("./img/logo.png")}
                                alt=""
                                className="w-12 md:w-16 p-1"
                            />
                            <h1 className="text-lg sm:text-xl md:text-3xl font-bold">
                                Enchanting <br />
                                Freelance
                            </h1>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 flex">
                        <div className="order-1 sm:order-1">
                            <Link
                                to={"/author/create"}
                                className="hidden sm:flex cursor:pointer whitespace-nowrap bg-yaOrange text-white hover:bg-yaOrange-medium duration-300 rounded  px-2 sm:px-3 py-2 font-semibold"
                            >
                                Создать заказ
                            </Link>
                        </div>
                        <div className="flex justify-between items-center gap-4 text-md whitespace-nowrap order-1">
                            <div className="hidden md:flex flex-col border-l-2 pl-3 border-r-2 border-gray-500 border-opacity-75 pr-3 justify-between text-md">
                                <div className="flex justify-between items-center gap-2 p-1">
                                    <img
                                        src={require("./img/wallet.png")}
                                        className=" p-1 object-fill"
                                        alt="1"
                                    />
                                    <p>Баланс:</p>
                                    <button className="bg-green-500  hover:bg-green-400 duration-300 shadow-md px-2 py-1 rounded font-semibold text-white ">
                                        {balance} P
                                    </button>
                                </div>
                            </div>
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;

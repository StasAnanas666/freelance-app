import { Chat } from "./Chat";

const Confirm = () => {
    return (
        <div className="mt-6 ">
            <h2 className="text-md sm:text-xl md:text-2xl text-center font-bold px-6 xl:px-0">
                Отклики
            </h2>
            <div className="flex gap-4 mt-4 flex-col md:flex-row">
                <div className="w-full  md:w-2/6 flex flex-col gap-3 ">
                    <div className="cursor-pointer hover:scale-105 transition-all duration-200">
                        <div className="flex gap-4 items-center bg-white rounded p-3">
                            <div className="">
                                <img
                                    src={require("@assets/images/addons/profile.png")}
                                    alt="IMG"
                                    className="w-16  rounded-full"
                                />
                            </div>
                            <div className="flex justify-between w-full gap-2 flex-wrap sm:flex-nowrap">
                                <div className="">
                                    <div>
                                        <p>Клим Саныч</p>
                                        <p className="text-gray-400 text-sm">
                                            @username
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center whitspa">
                                    <div className="">
                                        <p className="text-green-500 text-lg font-bold w-full">
                                            11500 P
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center bg-green-200 rounded p-3 cursor-pointer hover:scale-105 transition-all duration-200">
                            <div className="">
                                <img
                                    src={require("@assets/images/addons/profile.png")}
                                    alt="IMG"
                                    className="w-16 rounded-full"
                                />
                            </div>
                            <div className="flex justify-between w-full gap-2 flex-wrap sm:flex-nowrap ">
                                <div className="">
                                    <div>
                                        <p className="font-semibold">
                                            Виктор Палыч
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            @username
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center whitspa">
                                    <div className="">
                                        <p className="text-green-500 text-lg font-bold w-full">
                                            12000 P
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/6 flex flex-col gap-4">
                    <div className="flex gap-2 items-center justify-center flex-col bg-white rounded py-4 px-6">
                        <p className="">
                            <span className="font-semibold">
                                {" "}
                                Виктор Палыч{" "}
                            </span>
                            готов взяться за работу за{" "}
                            <span className="text-green-500">12000 P</span>
                        </p>
                        <button className="px-4 py-2 bg-green-500 hover:bg-green-400 transition-all rounded text-white font-semibold">
                            Оплатить заказ
                        </button>
                    </div>
                    <Chat />
                </div>
            </div>
        </div>
    );
};
export default Confirm;

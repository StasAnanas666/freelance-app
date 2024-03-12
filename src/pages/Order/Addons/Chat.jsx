const Chat = () => {
    return (
        <div className="bg-white rounded px-6 py-4 relative gap-4 flex flex-col">
            <div>
                <div className="flex justify-start  gap-3">
                    <div className="flex items-end">
                        <img
                            src={require("@assets/images/addons/profile.png")}
                            alt="IMG"
                            className="w-14 rounded-full "
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-2/4">
                        <p className="text-gray-400">Виктор Палыч</p>
                        <p className="bg-gray-100 rounded-lg p-3 rounded-bl-none">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Similique earum aliquam quas vel dolorem. Aut?
                        </p>
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    <div className="flex flex-col gap-1 w-2/4">
                        <p className="text-gray-400 flex justify-end">
                            Имя Фамилия
                        </p>
                        <p className="bg-yaDark-medium text-white rounded-lg p-3 rounded-br-none">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eveniet eum numquam quidem eos consectetur
                            quas magni amet, fuga, consequuntur perferendis
                            inventore, ipsum voluptates sit eligendi animi
                            voluptatum nemo explicabo sint autem modi quo
                            tempore.
                        </p>
                    </div>
                    <div className="flex items-end">
                        <img
                            src={require("@assets/images/addons/currentuser.png")}
                            alt="IMG"
                            className="w-14 rounded-full "
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="border rounded-lg p-3 flex justify-between items-center">
                    <div className="flex gap-4">
                        <div>
                            <img
                                src={require("@assets/images/addons/emoji.png")}
                                alt=""
                                className="rounded-xl w-8 transition-all duration-300 animate-bounce hover:scale-105 hover:animate-pulse cursor-pointer "
                            />
                        </div>
                        <input
                            type="text"
                            className="outline-none w-3/4"
                            placeholder="Введите сообщение..."
                        />
                    </div>
                    <div>
                        <button className="bg-yaDark-medium hover:bg-yaDark duration-200 px-3 py-2 rounded text-white">
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Chat;

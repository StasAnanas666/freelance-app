const Centerblock = () => {
    return (
        <section className="flex mt-4 sm:mt-16 mx-auto px-4 sm:px-0 flex-wrap sm:flex-nowrap">
            <div className="order-2 sm:order-1 left-block w-full sm:w-1/2 flex flex-col justify-center items-center relative">
                <div className="mt-6 sm:mt-0 flex gap-8 flex-col relative  items-center text-center sm:items-start sm:text-left">
                    <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                        Возьми заказ уже <br />
                        <span className="underline underline-offset-4">
                            сегодня
                        </span>
                    </div>
                    <div className="text-md md:text-lg lg:text-2xl ">
                        <p>Экономим твои время и деньги</p>
                    </div>
                    <div className="flex justify-between  font-semibold gap-4">
                        <button className="border-2 border-yaPurple hover:border-yaDark-medium hover:bg-yaDark-medium duration-200 bg-yaPurple h-fit py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-8 rounded text-white">
                            <p className="duration-300">Разместить заказ</p>
                        </button>
                        <button className="border-2 hover:scale-105 duration-200  shadow-sm md:shadow-md hover:shadow-gray-400 border-yaPurple rounded py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-8 relative bg-white z-10">
                            Стать автором
                        </button>
                    </div>
                </div>
            </div>
            <div className="order-1 sm:order-2 right-block relative w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0">
                <div className="w-3/4 sm:w-3/4">
                    <img
                        src={require("@assets/images/main/womanshape.png")}
                        className=""
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Centerblock;

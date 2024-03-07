const Stats = () => {
    return (
        <section className="mt-6 md:mt-16 ">
            <div className="flex flex-col items-center justify-center relative mt-16">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center ">
                    Актуальная статистика
                </h2>
                <hr className="bg-yaOrange p-1 rounded-full w-16 mt-6" />
            </div>
            <div className="bg-yaDark mt-16">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-y-6 py-2  lg:py-4">
                        <div className="text-center text-white">
                            <p className="md:text-xl lg:text-3xl font-semibold">
                                2322
                            </p>
                            <p className="text-sm lg:text-xl font-semibold">
                                Заказов <br />
                                выполнено
                            </p>
                        </div>
                        <div className="text-center text-white">
                            <p className="md:text-xl lg:text-3xl font-semibold">
                                1323
                            </p>
                            <p className="text-sm lg:text-xl font-semibold">
                                Актуальных <br />
                                предложений
                            </p>
                        </div>
                        <div className="text-center text-white">
                            <p className="md:text-xl lg:text-3xl font-semibold">
                                4421
                            </p>
                            <p className="text-sm lg:text-xl font-semibold">
                                Участников <br />
                                зарегистрировано
                            </p>
                        </div>
                        <div className="text-center text-white">
                            <p className="md:text-xl lg:text-3xl font-semibold">
                                423242
                            </p>
                            <p className="text-sm lg:text-xl font-semibold">
                                Средств <br />
                                Выплачено
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

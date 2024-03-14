import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedOrders } from "../../features/slices/orderSlice";
import { Link } from "react-router-dom";
import { gsap } from "gsap/gsap-core";

const Feedorders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderState.feedOrders);
    const user = useSelector((state) => state.userState.uuid);

    const handleAnimate = () => {
        gsap.fromTo(
            ".feeds-order",
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.55,
                stagger: 0.35,
            }
        );
    };

    useEffect(() => {
        handleAnimate();
    }, []);

    useEffect(() => {
        if (user !== "") {
            dispatch(getFeedOrders(user));
        }
    }, [dispatch, user]);
    return (
        <section className="mt-12">
            <div className="container mx-auto max-w-7xl">
                <div className="flex justify-center">
                    <div className="w-full ">
                        <h2 className="text-2xl text-yaDark font-bold px-6 xl:px-0">
                            Список заказов
                        </h2>
                        <div className="mt-4 flex flex-col gap-3 px-6 xl:px-0">
                            {Array.isArray(orders) && orders.length > 0 ? (
                                orders.map((i) => (
                                    <Link
                                        to={`/author/order/${i._id}`}
                                        key={i._id}
                                        className="feeds-order"
                                    >
                                        <div className="bg-white rounded py-3 px-6 flex justify-center text-center sm:text-left sm:justify-between gap-3 flex-wrap sm:flex-nowrap">
                                            <div>
                                                {!i.inWork ? (
                                                    <p className="text-sm sm:text-lg font-medium">
                                                        Заказ #{i._id}
                                                    </p>
                                                ) : (
                                                    <p className="text-sm sm:text-lg text-green-500">
                                                        Заказ #{i._id}
                                                    </p>
                                                )}
                                                <p className="mt-1 text-gray-400">
                                                    {i.name}
                                                </p>
                                            </div>
                                            {!i.inWork ? (
                                                <div className="text-yaOrange-light font-medium">
                                                    Поиск исполнителей
                                                </div>
                                            ) : (
                                                <div className="flex flex-col justify-between ">
                                                    <div className="font-medium flex gap-2 justify-end">
                                                        <p>Цена:</p>
                                                        <p className="text-green-500">
                                                            {i.price} P
                                                        </p>
                                                    </div>
                                                    <p className="mt-1 text-gray-400">
                                                        Исполнитель: Ник
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-gray-300">Нет заказов...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Feedorders;

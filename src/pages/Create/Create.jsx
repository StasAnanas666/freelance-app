import { useEffect, useState } from "react";
import { auth } from "@fire";
import { saveOrder } from "../../features/slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/gsap-core";
const Create = () => {
    const user = useSelector((state) => state.userState.uuid);
    const [tempUser, setTempuser] = useState("");
    const person = useSelector((state) => state.personState.currentPerson);
    const dispatch = useDispatch();

    const [orderForm, setOrderForm] = useState({
        uuid: user,
        username: tempUser,
        workType: "",
        workclassName: "",
        name: "",
        currentdate: false,
        datetime: "",
        price: "",
        originals: "",
        description: "",
        inWork: false,
    });
    const handleClearForm = () => {
        setOrderForm({
            uuid: user,
            username: tempUser,
            workType: "",
            workclassName: "",
            name: "",
            currentdate: false,
            datetime: "",
            price: "",
            originals: "",
            description: "",
            inWork: false,
        });
    };

    const handleAnimate = () => {
        let tl = gsap.timeline({ repeat: false });
        tl.fromTo(
            ".create-section",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.25,
            }
        );
        tl.fromTo(
            ".create-left--input",
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.15,
            }
        );
        tl.fromTo(
            ".create-right--textarea",
            {
                opacity: 0,
                scale: 0,
            },
            {
                x: 0,
                scale: 1,
                opacity: 1,
                stagger: 0.25,
            }
        );
        tl.fromTo(
            ".create-right--text",
            {
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.25,
            }
        );
    };

    useEffect(() => {
        gsap.set(".create-right--text", { opacity: 0 });
        handleAnimate();
    }, [gsap]);

    useEffect(() => {
        if (person[0].username) {
            setTempuser(person[0].username);
            setOrderForm({ ...orderForm, username: person[0].username });
        }
    }, [person]);

    const formChecker = () => {
        if (orderForm.username === "") {
            setOrderForm({ ...orderForm, username: "NoNameUser" });
        }
        for (let i = 0; i < Object.keys(orderForm).length; i++) {
            if (orderForm[Object.keys(orderForm)[i]] === "") {
                return false;
            }
        }
        return true;
    };

    const handleOrder = () => {
        const inputCheck = formChecker();
        if (!inputCheck) {
            alert("Заполните все поля!");
        } else {
            try {
                if (auth.currentUser.uid === user) {
                    dispatch(saveOrder(orderForm));
                } else {
                    alert("relogin pls");
                }
            } catch (err) {
                console.log(err);
            } finally {
                handleClearForm();
            }
        }
    };

    return (
        <section className=" text-yaDark-medium py-8 create-section">
            <div className="container mx-auto  bg-white ">
                <div className="flex justify-center">
                    <div className="w-full rounded ">
                        <h2 className="text-2xl  font-bold px-12 p-3 bg-white">
                            Размещение заказа
                        </h2>
                        <hr />
                        <div className="grid grid-cols-1 md:grid-cols-2 px-12 py-3 gap-10 ">
                            <div className="flex flex-col gap-5 order-2 md:order-1">
                                <div className="flex flex-col gap-5 mt-2">
                                    <div className="relative h-11 w-full min-w-[200px] create-left--input">
                                        <input
                                            placeholder="Разработка"
                                            value={orderForm.workType}
                                            onChange={(e) =>
                                                setOrderForm({
                                                    ...orderForm,
                                                    workType: e.target.value,
                                                })
                                            }
                                            className={`${
                                                orderForm.workType
                                                    ? "border-green-500 text-yaDark-medium"
                                                    : "border-red-500 placeholder-red-500 placeholder-opacity-50"
                                            } peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yaDark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                        />
                                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yaDark after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-yaDark peer-focus:after:scale-x-100 peer-focus:after:border-yaDark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Тип работы
                                        </label>
                                    </div>

                                    <div className="relative h-11 w-full min-w-[200px] create-left--input">
                                        <input
                                            placeholder="Веб-разработка"
                                            value={orderForm.workclassName}
                                            onChange={(e) =>
                                                setOrderForm({
                                                    ...orderForm,
                                                    workclassName:
                                                        e.target.value,
                                                })
                                            }
                                            className={`${
                                                orderForm.workclassName
                                                    ? "border-green-500 text-yaDark-medium"
                                                    : "border-red-500 placeholder-red-500 placeholder-opacity-50"
                                            } peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yaDark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                        />
                                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yaDark after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-yaDark peer-focus:after:scale-x-100 peer-focus:after:border-yaDark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Предмет
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px] create-left--input">
                                        <input
                                            placeholder="Название заказа"
                                            value={orderForm.name}
                                            onChange={(e) =>
                                                setOrderForm({
                                                    ...orderForm,
                                                    name: e.target.value,
                                                })
                                            }
                                            className={`${
                                                orderForm.name
                                                    ? "border-green-500 text-yaDark-medium"
                                                    : "border-red-500 placeholder-red-500 placeholder-opacity-50"
                                            } peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yaDark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                        />
                                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yaDark after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-yaDark peer-focus:after:scale-x-100 peer-focus:after:border-yaDark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Название
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center create-left--input">
                                    <p className="font-medium">Срок сдачи:</p>
                                    <input
                                        type="date"
                                        value={orderForm.datetime}
                                        onChange={(e) =>
                                            setOrderForm({
                                                ...orderForm,
                                                datetime: e.target.value,
                                            })
                                        }
                                        className={`${
                                            orderForm.datetime
                                                ? "border-green-500 text-yaDark-medium"
                                                : "border-red-500 placeholder-red-500 placeholder-opacity-50"
                                        } peer h-full w-2/4 lg:w-1/4 border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yaDark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                    />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="relative h-11 w-full min-w-[200px] create-left--input">
                                        <input
                                            placeholder="2321"
                                            value={orderForm.price}
                                            onChange={(e) =>
                                                setOrderForm({
                                                    ...orderForm,
                                                    price: e.target.value,
                                                })
                                            }
                                            className={`${
                                                orderForm.price
                                                    ? "border-green-500 text-yaDark-medium"
                                                    : "border-red-500 placeholder-red-500 placeholder-opacity-50"
                                            } peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yaDark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                        />
                                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yaDark after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-yaDark peer-focus:after:scale-x-100 peer-focus:after:border-yaDark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Цена
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px] create-left--input">
                                        <input
                                            placeholder="Свободная"
                                            value={orderForm.originals}
                                            onChange={(e) =>
                                                setOrderForm({
                                                    ...orderForm,
                                                    originals: e.target.value,
                                                })
                                            }
                                            className={`${
                                                orderForm.originals
                                                    ? "border-green-500 text-yaDark-medium"
                                                    : "border-red-500 placeholder-red-500 placeholder-opacity-50"
                                            } peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yaDark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                        />
                                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yaDark after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-yaDark peer-focus:after:scale-x-100 peer-focus:after:border-yaDark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Требуемая оригинальность
                                        </label>
                                    </div>
                                    <div className="mt-4 create-left--input">
                                        <button
                                            onClick={handleOrder}
                                            className="text-white duration-300 hover:bg-yaOrange-medium  text-lg px-6 py-3 bg-yaOrange rounded-lg font-semibold"
                                        >
                                            Разместить заказ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-4 bg-4 order-1 md:order-2">
                                <div className="flex flex-col gap-1  h-full create-right--textarea">
                                    <p className="font-medium">
                                        Описание работы
                                    </p>
                                    <textarea
                                        value={orderForm.description}
                                        onChange={(e) =>
                                            setOrderForm({
                                                ...orderForm,
                                                description: e.target.value,
                                            })
                                        }
                                        className={`${
                                            orderForm.description
                                                ? "border-green-500 text-yaDark-medium"
                                                : "border-red-500"
                                        } border w-full rounded outline-none px-3 py-2 h-48 md:h-full`}
                                    ></textarea>
                                </div>
                                <div className="flex flex-col gap-2 items-start">
                                    <button className="opacity-0 create-right--text bg-yaDark text-gray-100 px-6 py-2 rounded-lg hover:bg-yaDark-medium duration-300">
                                        Добавить файлы
                                    </button>
                                    <div className="w-full flex flex-col gap-2 create-right--text">
                                        <p className="font-medium">
                                            Добавленные файлы:
                                        </p>
                                        <p className="text-gray-400 w-full">
                                            Нет добавленных файлов
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Create;

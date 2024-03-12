import { auth } from "@fire";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/gsap-core";
import { getPerson, updatePerson } from "../../features/slices/personSlice";
const Settings = () => {
    const dispatch = useDispatch();
    const uuid = useSelector((state) => state.userState.uuid);
    const person = useSelector((state) => state.personState.currentPerson);
    const [userEmail, setUserEmail] = useState("");
    const [currentName, setCurrentName] = useState("");
    const [username, setUsername] = useState("");
    const handlerOnLeave = () => {
        auth.signOut();
    };

    const handleAnimate = () => {
        let tl = gsap.timeline({ repeat: false });
        tl.fromTo(
            ".settings-user",
            {
                opacity: 0,
                x: -400,
            },
            {
                opacity: 1,
                x: 0,
                stagger: 0.12,
            }
        );
    };

    useEffect(() => {
        gsap.set(".settings-user", { x: -400, opacity: 0 });
        handleAnimate();
    }, []);

    useEffect(() => {
        dispatch(getPerson(uuid));
    }, [dispatch, uuid]);

    const handleUsername = () => {
        dispatch(
            updatePerson({
                uuid: person[0].uuid,
                username: username,
            })
        );
        setUsername("");
    };

    useEffect(() => {
        if (person.length > 0) {
            setUserEmail(person[0].email);
            setCurrentName(person[0].username);
        }
    }, [person]);

    return (
        <section className="mt-12">
            <div className="container mx-auto max-w-7xl sm:px-6 sm:py-3">
                <div className="rounded bg-white px-6 py-3 ">
                    <div className="px-6 py-3 ">
                        <h2 className="text-2xl font-bold">Настройки</h2>
                    </div>
                    <hr />
                    <div className="flex justify-between px-6 py-3 w-full md:w-4/6 items-center gap-x-2 flex-wrap">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold settings-user opacity-0">
                                Username:{" "}
                                {!currentName ? (
                                    <span className="font-normal text-gray-300">
                                        Вы не указали никнейм ¯\_(ツ)_/¯
                                    </span>
                                ) : (
                                    <span className="font-normal">
                                        @{currentName}
                                    </span>
                                )}
                            </p>
                            <p className="font-semibold settings-user opacity-0">
                                E-mail:{" "}
                                {!userEmail ? (
                                    <span className="font-normal text-gray-300">
                                        У вас нет email
                                    </span>
                                ) : (
                                    <span className="font-normal ">
                                        {userEmail}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="settings-user opacity-0">
                            <p>
                                <span className="font-semibold">id:</span> 1
                            </p>
                        </div>
                    </div>
                    <hr />

                    <div className="px-6 py-3">
                        <h2 className="text-2xl settings-user opacity-0">
                            Никнейм
                        </h2>
                        <div className="flex gap-2 flex-col w-full md:w-4/6 mt-3">
                            <div className="w-72 settings-user opacity-0">
                                <div className="relative w-full min-w-[200px] h-10">
                                    <input
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        value={username}
                                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                    />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Ваш никнейм
                                    </label>
                                </div>
                            </div>

                            <div className="settings-user opacity-0">
                                <button
                                    onClick={handleUsername}
                                    className="bg-green-500 hover:bg-green-400 duration-300 rounded px-6 py-2 text-white"
                                >
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="px-6 py-3">
                        <h2 className="text-2xl settings-user opacity-0">
                            Образование
                        </h2>
                        <div className="flex gap-2 flex-col w-full md:w-4/6 mt-3">
                            <input
                                placeholder="Учебное заведение"
                                className="border rounded pl-3 pr-1 py-2 settings-user opacity-0"
                            />
                            <div className="flex gap-2 bg flex-wrap sm:flex-nowrap">
                                <input
                                    placeholder="Факультет"
                                    className="border rounded pl-3 pr-1 py-2 w-full settings-user opacity-0"
                                />
                                <input
                                    placeholder="Специальность"
                                    className="border rounded pl-3 pr-1 py-2 w-full settings-user  opacity-0"
                                />
                            </div>
                            <div className="flex gap-2 bg flex-wrap sm:flex-nowrap">
                                <input
                                    placeholder="Статус"
                                    className="border rounded pl-3 pr-1 py-2 w-full settings-user opacity-0"
                                />
                                <input
                                    placeholder="Курс"
                                    className="border rounded pl-3 pr-1 py-2 w-full settings-user opacity-0"
                                />
                            </div>
                            <div>
                                <button className="settings-user opacity-0 bg-green-500 hover:bg-green-400 duration-200 rounded px-6 py-2 text-white">
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="px-6 py-3 ">
                        <h2 className="text-2xl settings-user opacity-0">
                            Пароль
                        </h2>
                        <div className="flex flex-col gap-y-3 flex-wrap">
                            <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-2/6 flex flex-col gap-2 mt-3">
                                <input
                                    placeholder="Новый пароль"
                                    className="border rounded pl-3 pr-1 py-2 settings-user opacity-0"
                                />
                                <input
                                    placeholder="Новый пароль ещё раз"
                                    className="border rounded pl-3 pr-1 py-2 settings-user opacity-0"
                                />
                                <input
                                    placeholder="Старый пароль"
                                    className="border rounded pl-3 pr-1 py-2 settings-user opacity-0"
                                />
                            </div>
                            <div className="flex gap-2 sm:justify-between justify-center  w-full flex-wrap">
                                <div className="settings-user opacity-0 w-full  sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-2/6 gap-2 flex justify-between flex-wrap">
                                    <button className="w-full sm:w-fit bg-green-500 hover:bg-green-400 duration-300 rounded px-4 lg:px-6 py-2 text-white ">
                                        Сохранить
                                    </button>
                                    <button className="w-full sm:w-fit bg-yaOrange-medium hover:bg-yaOrange-light  duration-300 rounded px-4 lg:px-6 py-2 text-white">
                                        Сменить пароль
                                    </button>
                                </div>
                                <div className="w-full  sm:w-fit mt-3 sm:mt-0 gap-3 flex settings-user opacity-0">
                                    <button
                                        onClick={handlerOnLeave}
                                        className="w-full sm:w-fit text-lg rounded px-2 py-1 bg-red-500 hover:bg-red-600 duration-300 text-white"
                                    >
                                        Выйти
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Settings;

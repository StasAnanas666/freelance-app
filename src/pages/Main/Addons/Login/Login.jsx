import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setModal } from "@userSlice";
import { Navigate } from "react-router-dom";

import { auth } from "@fire";
import { gsap } from "gsap";
import { Googlelogin } from "../../../../UI/buttons/Googlelogin";

export const Login = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.userStates.loginModal);
  const [badLogin, setBadLogin] = useState(false);
  const [regForm, setRegForm] = useState(false);
  const [badRePassword, setBadRePassword] = useState(false);
  const [badAccount, setBadAccount] = useState(false);
  const [userForm, setUserForm] = useState({
    login: "",
    password: "",
  });

  const handlerBadLogin = () => {
    gsap.to(".box", {
      keyframes: {
        y: [0, 3, -3, 3, -3, 0],
        ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
        easeEach: "power2.inOut", // <- ease between each keyframe (defaults to "power1.inOut")
      },
      ease: "normal", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
      duration: 0.85,
      stagger: 0.03,
    });
  };

  const clearUserForm = (id) => {
    if (id === 1) {
      setUserForm({
        login: userForm.login,
        password: "",
        repassword: "",
      });
    } else if (id === 2) {
      setUserForm({
        login: "",
        password: "",
        repassword: "",
      });
    }
  };

  const handlerClosedModal = () => {
    dispatch(setModal());
  };

  const handlerRegForm = () => {
    clearUserForm(1);
    setBadLogin(false);
    setRegForm(!regForm);
  };

  const handleSignUp = async () => {
    if (userForm.password !== userForm.repassword) {
      handlerBadLogin();
      setBadRePassword(true);

      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(
        userForm.login,
        userForm.password
      );
      handlerClosedModal();
    } catch (error) {
      setBadAccount(true);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(userForm.login, userForm.password)
      .then(() => {
        clearUserForm(2);
        handlerClosedModal();
        console.log("succefly");
        dispatch(setModal());
        <Navigate to={"/author"} />;
      })
      .catch((error) => {
        setBadLogin(true);
        console.error("Incorrect username or password");

        handlerBadLogin();
        clearUserForm(1);
      });
  };

  const handleAnimate = () => {
    let tl = gsap.timeline({ repeat: false });
    tl.fromTo(
      ".login-section",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
      }
    );
    tl.fromTo(
      ".login-box",
      {
        y: -300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
      }
    );
  };

  useEffect(() => {
    if (modalState === true) {
      document.body.style.overflow = "hidden";
      handleAnimate();
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalState]);

  if (!modalState) {
    return <></>;
  }
  return (
    <section className="absolute w-screen h-screen z-50">
      <div className="bg-black bg-opacity-80 absolute w-full h-full login-section "></div>
      <div className="login-box flex items-center justify-center h-full w-full ">
        <div
          className=" absolute w-full h-full "
          onClick={handlerClosedModal}
        ></div>
        <div className="bg-white py-6 px-6 rounded sm:max-w-md h-full justify-center sm:h-fit w-full flex flex-col items-center gap-8 relative z-50">
          <button
            onClick={handlerClosedModal}
            className="absolute right-0 top-0 -translate-x-4 translate-y-2 font-semibold cursor-pointer"
          >
            X
          </button>
          <div className="flex gap-3">
            <img
              src={require("@assets/logo.png")}
              alt=""
              className="h-full w-14 md:w-16"
            />
            <h2 className="text-lg md:text-2xl font-bold">
              Enchanting <br /> Freelance
            </h2>
          </div>
          <form className="flex flex-col  text-yaDark text-lg items-center w-full">
            <div className="flex flex-col gap-3 w-full">
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  type="email"
                  placeholder=""
                  value={userForm.login}
                  onChange={(e) =>
                    setUserForm({ ...userForm, login: e.target.value })
                  }
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  E-mail
                </label>
              </div>
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  type="password"
                  value={userForm.password}
                  onChange={(e) =>
                    setUserForm({ ...userForm, password: e.target.value })
                  }
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              {!regForm ? (
                <></>
              ) : (
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    type="password"
                    value={userForm.repassword}
                    onChange={(e) =>
                      setUserForm({ ...userForm, repassword: e.target.value })
                    }
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Re-password
                  </label>
                </div>
              )}
              {!badRePassword ? (
                <></>
              ) : (
                <div id="badLogin">
                  <p className="gap-1.5 text-sm flex items-center justify-center text-red-500 flex-semibold">
                    <span className="box">Пароли</span>{" "}
                    <span className="box">не</span>{" "}
                    <span className="box">совпадают</span>{" "}
                    <span className="box">😔</span>{" "}
                  </p>
                </div>
              )}
              {!badAccount ? (
                <></>
              ) : (
                <div id="badLogin">
                  <p className="gap-1.5 text-sm flex items-center justify-center text-red-500 flex-semibold">
                    <span className="box">Аккаунт</span>{" "}
                    <span className="box">уже</span>{" "}
                    <span className="box">зарегистрирован</span>{" "}
                    <span className="box">на</span>{" "}
                    <span className="box">платформе</span>
                  </p>
                </div>
              )}
              {!badLogin ? (
                <></>
              ) : (
                <div id="badLogin">
                  <p className="gap-1.5 text-sm flex items-center justify-center text-red-500 flex-semibold">
                    <span className="box">Неверное</span>{" "}
                    <span className="box">имя</span>{" "}
                    <span className="box">пользователя</span>{" "}
                    <span className="box">или</span>{" "}
                    <span className="box">пароль</span>
                  </p>
                </div>
              )}

              <div className="flex justify-center sm:justify-between w-full gap-4 flex-wrap sm:flex-nowrap">
                {!regForm ? (
                  <button
                    type="button"
                    onClick={loginHandler}
                    className="border-yaOrange border-2 bg-yaOrange hover:bg-yaOrange-medium durbality-300 flex items-center justify-center rounded w-full sm:w-1/3 py-2 text-white"
                  >
                    Войти
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setRegForm(!regForm);
                      setBadAccount(false);
                      setBadRePassword(false);
                      clearUserForm(1);
                    }}
                    className="border-yaOrange border-2 bg-white hover:bg-gray-50 durbality-300 text-black flex items-center justify-center rounded w-full sm:w-1/3 py-2 "
                  >
                    Войти
                  </button>
                )}

                {!regForm ? (
                  <button
                    type="button"
                    onClick={() => handlerRegForm()}
                    className="border-yaOrange border-2 bg-white hover:bg-gray-50 durbality-300 rounded w-full sm:w-2/3 py-2"
                  >
                    Регистрация
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSignUp()}
                    className="border-yaOrange border-2 bg-yaOrange hover:bg-yaOrange-medium durbality-300 text-white rounded w-full sm:w-2/3 py-2"
                  >
                    Регистрация
                  </button>
                )}
              </div>
            </div>
          </form>
          <div className=" flex items-center justify-center  w-full flex-col gap-3">
            <hr className="p-0.25 bg-gray-400 w-full " />
            <p className="text-gray-400">Или войти через</p>
            <div className="flex gap-3">
              <div className="w-8 h-8  rounded">
                <Googlelogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

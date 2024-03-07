import { gsap } from "gsap/gsap-core";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "@userSlice";

const Leftmenu = () => {
    const dispatch = useDispatch();
    const menuToggle = useSelector((state) => state.userState.menuModal);
    const loginState = useSelector((state) => state.userState.loginModal);

    const animateMenuBar = () => {
        gsap.fromTo(
            "#leftMenuBar",
            { width: 0, height: "100%" },
            {
                width: "100%",
                duration: 0.5,
            }
        );
        gsap.fromTo(
            "#userMenuLogo",
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
            }
        );
    };

    const animateMenuList = () => {
        gsap.fromTo(
            ".box",
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.25,
            }
        );
    };

    const animatedMenu = () => {
        if (menuToggle === true) {
            animateMenuList();
            animateMenuBar();

            gsap.to("#topspan", {
                x: 5,
            });
            gsap.to("#middlespan", {
                x: 0,
            });
            gsap.to("#bottomspan", {
                x: -5,
            });
        } else {
            gsap.to("#topspan", {
                x: 0,
            });
            gsap.to("#middlespan", {
                x: 0,
            });
            gsap.to("#bottomspan", {
                x: 0,
            });
        }
    };

    useEffect(() => {
        animatedMenu();
        if (menuToggle || loginState) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuToggle, loginState]);

    return (
        <div className="">
            <div
                onClick={() => dispatch(setMenu(!menuToggle))}
                className="relative w-6 h-4 flex flex-col justify-betweem cursor-pointer"
            >
                <span
                    id="topspan"
                    className="absolute bg-white w-full h-0.5 rounded-full top-0"
                ></span>
                <span
                    id="middlespan"
                    className="absolute bg-white w-full h-0.5 rounded-full bottom-1/2 translate-y-1/2"
                ></span>
                <span
                    id="bottomspan"
                    className="absolute bg-white w-full h-0.5 rounded-full bottom-0"
                ></span>
            </div>
        </div>
    );
};

export default Leftmenu;

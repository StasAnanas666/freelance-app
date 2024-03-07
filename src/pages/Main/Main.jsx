import "./Main.css";
import Advantages from "./Addons/Advantages";
import Steps from "./Addons/Steps";
import Headnav from "./Addons/Headnav/Headnav";
import Footer from "./Addons/Footer/Footer";
import Menu from "./Addons/Headnav/Menu";
import Centerblock from "./Addons/Centerblock/Centerblock";
import Login from "./Addons/Login/Login";
import { useEffect } from "react";
import {auth} from "@fire";
import { Navigate } from "react-router-dom";
import gsap from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";

const Main = () => {
    const handleAnimate = () => {
        var tl = gsap.timeline({repeat: false});
        tl.fromTo(
            ".h-nav",
            {
                y: -200,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.85
            }
        );
        tl.fromTo(
            ".left-block",
            {
                x: -1000,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1, 
                duration: 0.65
            }
        );
        tl.fromTo(
            ".right-block",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1
            }
        );
    };

    useEffect(() => {
        gsap.to(".right-block", {
            y: "20",
            duration: 1.5,
            scale: 1.05,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut"
        });
        handleAnimate();
        document.body.style.backgroundColor = "white";
    }, []);

    if(auth.currentUser) {
        return <Navigate to={"/author"}/>
    }

    return (
        <section className="text-yaDark">
            <Login/>
            <Menu/>
            <div className="container mx-auto sm:py-4">
                <div className="h-nav flex items-center justify-center gap-y-4 gap-x-6 md:justify-between mx-auto flex-wrap md:flex-nowrap">
                    <div className="hidden sm:flex items-center gap-3">
                        <img 
                        src={require("@assets/logo.png")} 
                        alt=""
                        className="w-16 md:w-20 xl:w-24 h-full object-cover"
                        />
                        <h1 className="whitespace-nowrap text-2xl md:text-3xl xl:text-5xl font-bold">
                            Enchanting <br />
                            Freelance
                        </h1>
                    </div>
                    <Headnav/>
                </div>
                <Centerblock/>
            </div>
            <div className="mt-20">
                <Advantages/>
            </div>
            <div>
                <Steps/>
            </div>
            <div>
                <Footer/>
            </div>
        </section>
    )
}

export default Main;

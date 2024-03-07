import HandImg from "@assets/images/addons/hands.png";
import OkhandImg from "@assets/images/addons/okhand.png";
import MoneyImg from "@assets/images/addons/moneyhand.png";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Advantages = () => {
  const startAnimate = () => {
    gsap.to(".advantage-animate", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".advantage-animate",
        scrub: true,
        start: "top 80%",
        end: "top 10%",
      },
    });
    gsap.to(".advantage-box", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".advantage-box",
        scrub: true,
        stagger: 0.35,
        start: "top 80%",
        end: "top 20%",
      },
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".advantage-animate", { x: -800, opacity: 0 });
    gsap.set(".advantage-box", { x: -1000, opacity: 0 });
    startAnimate();
  }, []);

  return (
    <section className="advantage-animate">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center relative">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
            Преимущества сервиса
          </h2>
          <hr className="bg-yaOrange p-0.5 md:p-1 rounded-full w-16 mt-3 md:mt-6" />
        </div>
        <div className="advantage-box whitespace-nowrap grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center mt-16 max-w-lg max-w-md sm:max-w-3xl md:max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-2">
            <div className=" bg-gray-100 p-4 rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center">
              <img src={HandImg} />
            </div>
            <div>
              <p className="text-md md:text-lg font-medium">
                Гарантия выполнения <br />
                заказа
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="bg-gray-100 p-4 rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center">
              <img src={OkhandImg} />
            </div>
            <div>
              <p className="text-md md:text-lg font-medium">
                Удобный пользовательский <br />
                интерфейс
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="bg-gray-100 p-4 rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center">
              <img src={MoneyImg} />
            </div>
            <div>
              <p className="text-md md:text-lg font-medium">
                Цену вы выбираете <br />
                сами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

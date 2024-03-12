import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../feature/sliceAssets/preloaderSlice";

const Preloader = () => {
    const dispatch = useDispatch();
    const isLoad = useSelector((state) => state.preloaderState.loading);

    useEffect(() => {
        dispatch(setLoading(true));
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 2000);
    }, []);

    if (isLoad) {
        document.body.style.overflow = "hidden";
        return (
            <section className="w-screen h-screen relative z-50">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="h-72 w-72 bg-gray-500 opacity-20"></div>
                </div>
            </section>
        );
    } else {
        document.body.style.overflow = "auto";
        return;
    }
};

export default Preloader;

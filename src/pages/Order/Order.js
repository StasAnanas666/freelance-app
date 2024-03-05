import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteOrder, getOneOrder } from "../../features/slices/orderSlice";
import { gsap } from "gsap/gsap-core";

const Order = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const orders = useSelector((state) => state.orderSlice.oneOrder);
    const user = useSelector((state) => state.userState.uuid);

    const handleAnimate = () => {
        let tl = gsap.timeline({ repeat: false });
        tl.fromTo(
            ".order-section-title",
            {
                opacity: 0,
                y: -400,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.15,
            }
        );
    };

    useEffect(() => {
        handleAnimate();
    }, []);

    useEffect(() => {
        dispatch(getOneOrder(params.id));
    }, [dispatch, params.id]);

    const handleDeleteOrder = (order) => {
        dispatch(deleteOrder(order));
    };

    if (orders.length > 0) {
    }
};

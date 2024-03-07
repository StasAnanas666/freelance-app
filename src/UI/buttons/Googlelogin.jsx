import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import {auth} from "@fire";
import {setModal} from "@userSlice";

const Googlelogin = () => {
    const dispatch = useDispatch();
    const handleSignInWithGoogle = async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
            dispatch(setModal());
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="w-8 h-8 rounded" onClick={handleSignInWithGoogle}>
            <img src={require("@assets/images/auth/google.png")} alt=""
            className="cursor-pointer hover:scale-110 duration-300"
            />
        </div>
    )
}

export default Googlelogin;
import "./App.css";
import Author from "./pages/Author/Author";
import Order from "./pages/Order/Order";
import Header from "./components/Header/Header";
import Create from "./pages/Create/Create";
import Feedorders from "./pages/Feedorders/Feedorders";
import Settings from "./pages/Settings/Settings";
import Main from "./pages/Main/Main";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged } from "@userSlice";
import { auth } from "@fire";
import { createPerson, getPerson } from "./features/slices/personSlice";
import { useEffect } from "react";

function App() {
    const userUuid = useSelector((state) => state.userState.uuid);
    const person = useSelector((state) => state.personState.currentPerson);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setIsLogged(user.uid));
                dispatch(getPerson(user.uid));
            } else {
                dispatch(setIsLogged(""));
            }
        });
    }, [dispatch]);

    useEffect(() => {
        console.log("app ", person);
        if (person.length === 0 && auth.currentUser) {
            dispatch(
                createPerson({
                    uuid: auth.currentUser.uid,
                    email: auth.currentUser.email,
                    username: "",
                    balance: 0,
                    favourites: [],
                    activeOrders: [],
                    myOrders: [],
                })
            );
        }
    }, [dispatch, person]);

    return (
        <div className="App">
            <Router>
                {!userUuid ? <Navigate to="/" /> : <Header />}
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/author" element={<Author />} />
                    <Route path="/author/create" element={<Create />} />
                    <Route path="/author/order/:id" element={<Order />} />
                    <Route path="/author/settings" element={<Settings />} />
                    <Route path="/author/feeds" element={<Feedorders />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

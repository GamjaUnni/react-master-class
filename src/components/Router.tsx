// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {isLoggedIn ? (
                        <>
                            <Route path="/" element={<Home />} />
                        </>
                    ) : (
                        <Route path="/" element={<Auth />} />
                    )}
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default AppRouter;

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />,
//                 errorElement: <ErrorComponent />,
//             },
//             {
//                 path: "about",
//                 element: <About />,
//             },
//         ],
//         errorElement: <Notfound />,
//     },
// ]);

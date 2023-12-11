import { Routes, Route, Outlet } from "react-router-dom";

import Create from "./components/features/games/create/Create";
import Header from "./components/features/header/Header";
import Home from "./components/features/home/Home";
import Login from "./components/features/users/login/Login";
import Logout from "./components/features/users/logout/Logout";
import Register from "./components/features/users/register/Register";
import Edit from "./components/features/games/edit/Edit"
import Details from "./components/features/games/details/Details";
import Catalog from "./components/features/games/catalog/Catalog";
import Footer from "./components/features/footer/Footer";
import NotFound from "./components/features/404/NotFound";
import RouterGuardAuthenticated from "./components/core/guards/RouterGuardAuthenticated";
import RouterGuardPublic from "./components/core/guards/RouterGuardPublic";
import Delete from "./components/features/games/delete/Delete";
import { AuthProvider } from "./components/core/contexts/AuthContext";

function App() {
    // Another way to create Routes
    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Home />
    //     },
    //     {
    //         path: '/users/',
    //         element: <Outlet />,
    //         children:
    //     },
    // ]);

    return (
        <AuthProvider>
            <div id="box">
                <Header />
                
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/users/" element={<Outlet />} >
                            <Route element={<RouterGuardPublic />}>
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                            </Route>

                            <Route element={<RouterGuardAuthenticated />}>
                                <Route path="logout" element={<Logout />} />
                            </Route>
                        </Route >

                        <Route path="/games/" element={<Outlet />} >
                            <Route path="" element={<Catalog />} />
                            <Route path="details/:gameId" element={<Details />} />

                            <Route element={<RouterGuardAuthenticated />}>
                                <Route path="create" element={<Create />} />
                                <Route path="edit/:gameId" element={<Edit />} />
                                <Route path="delete/:gameId" element={<Delete />} />
                            </Route >
                        </Route >

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
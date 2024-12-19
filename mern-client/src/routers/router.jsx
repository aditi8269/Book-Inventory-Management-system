import {createBrowserRouter,} from "react-router-dom";
import App from "../App.jsx"; 
import Shop from "../shops/Shop";
import Front from "../frontpage/Front.jsx";
import Blog from "../components/Blog.jsx";
import About from "../components/About.jsx";
import SingleBook from "../components/SingleBook.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBook from "../dashboard/ManageBook.jsx";
import EditBook from "../dashboard/EditBook.jsx";
import SignUp from "../components/SignUp.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../privateroute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Front />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/book/:id',
                element: <SingleBook/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        ],
    },
    {
        path : '/admin/dashboard',
        element: <DashboardLayout/>,
        children:[
            {
                path:'/admin/dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'/admin/dashboard/upload',
                element:<UploadBook/>
            },
            {
                path:'/admin/dashboard/manage',
                element:<ManageBook/>
            },
            {
                path:'/admin/dashboard/edit-books/:id',
                element:<EditBook/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            }

        ]
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"logout",
        element:<Logout/>
    }
]);


export default router;

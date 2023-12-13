import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Error from "../ErrorPage/Error";
import EventsPack from "../Pages/Events_package/EventsPack";


const Router = createBrowserRouter([
            {
              path: "/",
              element:<Layout></Layout> ,
              errorElement: <Error></Error>,
              children: [
                        {
                                    path:"/",
                                    element: <Home></Home>,
                                    loader : () => fetch("https://events-management-server.vercel.app/events")
                        },
                        {
                                    path: "/events",
                                    element: <EventsPack></EventsPack>,
                                    loader : () => fetch("https://events-management-server.vercel.app/events")
                                   
                        }
              ]
            },
          ]);

export default Router;
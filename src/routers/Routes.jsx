import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contactlist from "../components/Contactlist";
import Editcontact from "../components/Editcontact";
import Viewcontact from "../components/Viewcontact";
import Mainlayout from "../components/Mainlayout";
import Addcontact from "../components/Addcontact";
import Errorpage from "../errorboundaries/Errorpage";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Contactlist />
            },
            {
                path:"/edit/:id",
                element:<Editcontact/>

            },{
                path:"/view/:id",
                element:<Viewcontact/>

            },{
                path:"add",
                element:<Addcontact/>
            }
            ,
    {
        path:"*",
        element:<Errorpage/>
    }

        ]
    }

])

export default router
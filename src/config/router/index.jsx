import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import routes from "./routes";

function Router(){
    const allRoutes = routes;

    return(
        <Routes>
            {allRoutes.AllRoutes.map((data, index)=>(
                <Route key={index} path={data.path} element={data.element}/>
            ))}
       </Routes>
    )
}

export default Router;


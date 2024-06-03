import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "../Layout";
import {Home, Nomatch} from "../Pages";
import {RootErrorBoundary} from "./RouteErrorBoundary";
import {About} from "../Pages/About";

export function Fallback() {
    return <h4>Performing initial data "load"</h4>;
}


const DefaultRoutes = () => {

    return (
        <div>
            <h1>
                GeoLocator Application
            </h1>
            <Routes>
                <Route path="/"
                       element={<Layout/>}
                       errorElement={<RootErrorBoundary/>}
                    // children={}
                >
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>

                    <Route path="*" element={<Nomatch/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default DefaultRoutes;

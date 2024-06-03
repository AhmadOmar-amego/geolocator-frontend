import {Link, Outlet} from "react-router-dom";
import React from 'react';




function Layout() {
    return (
        <div>
                        {/*<nav>*/}
                        {/*    <ul>*/}
                        {/*        <li>*/}
                        {/*            <Link to="/">Home</Link>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <Link to="/about">About me</Link>*/}

                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</nav>*/}
            <Outlet/>
        </div>
    );
}

export default Layout

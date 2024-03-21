import {Outlet} from "react-router-dom";
import {Button} from "@material-tailwind/react";

function Root() {
    return (
        <>
            <Outlet/>
        </>
    );
}

export default Root;
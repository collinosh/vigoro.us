
/* <Routes /> constant by: collinoshaughnessy@gmail.com */

import Landing from "../../pages/Landing";
import ReadMe from "../../pages/Information/ReadMe";
import Resume from "../../pages/Documents/Resume";
import Projects from "../../pages/Projects";
import IMS1 from "../../pages/Mockups/IMS/MU1";

const routes = [
    {
        path: "/",
        component: Landing,
        hasTemplate: true
    },
    {
        path: "/information/readme",
        component: ReadMe,
        hasTemplate: true
    },
    {
        path: "/documents/resume",
        component: Resume,
        hasTemplate: true
    },
    {
        path: "/projects",
        component: Projects,
        hasTemplate: true
    },
    {
        path: "/mockups/ims/mu-1",
        component: IMS1,
        hasTemplate: false
    }
];


export default routes;
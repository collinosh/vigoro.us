
/* <Routes /> constant by: collinoshaughnessy@gmail.com */

import Landing from "../../pages/Landing";
import ReadMe from "../../pages/Information/ReadMe";
import Resume from "../../pages/Documents/Resume";
import Projects from "../../pages/Projects";

const routes = [
    {
        path: "/",
        component: Landing
    },
    {
        path: "/information/readme",
        component: ReadMe
    },
    {
        path: "/documents/resume",
        component: Resume
    },
    {
        path: "/projects",
        component: Projects
    }
];

export default routes;
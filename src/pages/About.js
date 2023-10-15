import { Outlet } from "react-router-dom";

const About=()=>{
    return (<>
        <h1>This is About page we rendering</h1>
        <Outlet/>
    </>);
}

export default About;
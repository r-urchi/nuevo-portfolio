import React from 'react';
import Webs from "./Webs";
import Games from "./Games";
import AboutMe from "./AboutMe";

const Sections = () => {

    return(
        <div className="sections">
            <Webs/>
            <Games/>
            <AboutMe/>
        </div>
    )
}

export default Sections;
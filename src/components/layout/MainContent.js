import React from "react";
import './MainContent.scss'

const MainContent = ({children}) => (
    <div className="content">
        <div className="main-content">{children}</div>
    </div>
);
export default MainContent;

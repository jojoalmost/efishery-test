import React from "react";
import styles from './MainContent.module.scss'

const MainContent = ({children}) => (
    <div className={styles.content}>{children}</div>
);
export default MainContent;
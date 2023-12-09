import React from 'react';
import classes from "./ProgressBar.module.css";
const ProgressBar = ({ value, total}) => {
    const percentage = (value / total) * 100;

    return (
        <div className={classes.progressBar}>
            <div className={classes.progressBackground}>
                <div className={classes.progressLine} style={{ width: `${percentage}%`}}/>
            </div>
            <span className={classes.titleProgress}>{`${value}/${total}`}</span>
        </div>
    );
};

export default ProgressBar;
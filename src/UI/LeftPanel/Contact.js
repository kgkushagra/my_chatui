import React from 'react';
import classes from '../UI.module.css';

const contact=({userName,userAvatar})=>{
    // console.log(user);
    return (
        <div className={classes.contactBox}>
            <img src={userAvatar} alt={userName} className={classes.avatar}/>
            <p className={classes.contactText}>{userName}</p>
            
        </div>
    );

}

export default contact;
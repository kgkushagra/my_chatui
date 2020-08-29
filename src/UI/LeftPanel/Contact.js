import React from 'react';
import classes from '../UI.module.css';
const contact=({userName,userAvatar})=>{
    // console.log(user);
    return (
        <div>
            <img src={userAvatar} alt={userName} className={classes.avatar}/>
            <p>{userName}</p>
            
        </div>
    );

}

export default contact;
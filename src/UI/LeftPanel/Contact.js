import React from 'react';
import classes from '../UI.module.css';



const contact=({userName,userAvatar,sContact})=>{
    
    
    return (
        <div className={classes.contactBox} onClick={()=>sContact(userName,userAvatar)}>
            <img src={userAvatar} alt={userName} className={classes.avatar}/>
            <p className={classes.contactText}>{userName}</p>
            
        </div>
    );

}

export default contact;
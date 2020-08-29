import React from 'react';
import Contact from './Contact.js';
const ContactsList=({users})=>{
   const usersArray=Object.values(users);
   let renderedList="";
   for(const [key,value] of Object.entries(users)){
    console.log(value.name,key);
    if(key==="Host"){
    renderedList=<div><Contact userName="" userAvatar={value.img}/></div>
    }else{
    renderedList=<div><Contact userName={value.name} userAvatar={value.img}/> </div>;
    }
    
   }
       
    
return <div>{renderedList}</div>;
};

export default ContactsList;

// return <Contact user={user}/>;
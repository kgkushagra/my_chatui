import React, { Component } from 'react';
import Contact from './Contact.js';
import {contacts} from '../../generateFakeData';
import classes from '../../UI/UI.module.css';


export default class ContactsList extends Component{
    render(){
    console.log(contacts);
    let list=contacts.map((data,idx)=>{
    return <Contact key={idx} userAvatar={data.avatar} userName={data.name}/>
    });

    
   let renderedList="";
   for(const [key,value] of Object.entries(this.props.users)){
    //console.log(value.name,key);
    if(key==="Host"){
    renderedList=<div><Contact userName="" userAvatar={value.img}/></div>
    }
   }
       
    

        return(
            <div>
                <div className={classes.contactboxheader}>{renderedList}</div>
                <div className={classes.contactBoxes}>{list}</div>
            </div>
            
        );

    }
}

// return <Contact user={user}/>;
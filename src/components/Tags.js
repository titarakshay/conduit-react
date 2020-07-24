import React from 'react';


export default function Tags(props){
  
    return(
    
        <div className='tag-div'>
           
        {props.tags.map(tag=>{
            return(
                <button className='single-tag' onClick={()=>props.handle(tag)}>{tag}</button>
            )
        })}
        </div>
    )
}
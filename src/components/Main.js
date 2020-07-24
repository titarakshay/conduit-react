import React from "react";
import Feed from "./Feed";
import Hero from "./Hero";
import Tags from "./Tags";

export default function Main(props) {
  return (
    <>
    <Hero />
    <div className="container">
      <div className="main">
        <div className="feed-div">
          <div className="global">
            
            {props.tagname ?
            <>
            
            <button className='active' onClick={()=>props.handle('global')}>Global Feed</button>
            <span className='tagname'> #{props.tagname}</span>
             </>:
             <>
             <button className='global-btn' onClick={()=>props.handle('global')}>Global Feed</button> 
             <span ></span> 
             </>}
          </div>
          {props.feed ? <Feed feed={props.feed} /> : "Loading"}
        </div>
        <div className="tags">
          <h4>Popular Tags</h4>
          {props.tags ? (
            <Tags tags={props.tags} handle={(tag) => props.handle(tag)} />
          ) : (
            "Loading tags"
          )}
        </div>
      </div>
    </div>
    </>
  );
}

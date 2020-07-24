import React from "react";

export default function Feed(props) {
  return (
    
      <div className="feed">
  
        {props.feed.map((article) => {
          return (
            <div className="article-div">
              <div className="name-count">
                <div className="name-div">
                  <img
                    src={article.author.image}
                    alt={article.author.username}
                  />
                  <div className="name-date">
                    <h3>{article.author.username}</h3>
                    <p>{new Date(article.updatedAt).toDateString()}</p>
                  </div>
                </div>
                <div className="favorite-count">
                  <i class="fas fa-heart"></i>
                  <span>{article.favoritesCount}</span>
                </div>
              </div>
              <div className="article-details">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <div className="article-bottom">
                  <p className="read-more">Read more...</p>
                  <div className="taglist">
                    {article.tagList.map((tag) => {
                     return(
                         
                         <span>{tag}</span>
                        ) 
                         
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    
  );
}

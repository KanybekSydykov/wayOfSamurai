import React from 'react';
import p from './Post.module.css';


function Post(props) {



return (
  <div className={p.item}>
    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"></img>
      {props.message}
    <div>
      <span>like {props.likesCount}</span>
    </div>
  </div>
);
}

export default Post;
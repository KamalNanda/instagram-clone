import React , {Component} from 'react';
import LikeHolder from '../likeHolder/likeHolder'
import User from '../user/user'
import Comment from '../comments/comment/comment'
import './stylesheet.css'
const Post = (props) => {
  const data = props.data
  return 
    	<div className="post-container">
    		<User name = {data.userName} imgLink= {data.userImg}/>
    		<img src={data.postImg} alt={`${data.name} post`} className="post-img"/>
    		<LikeHolder id={data.id}  loadPosts={this.props.loadPosts}/>
    		<div className="caption-holder">
    			<p><strong>{data.userName}</strong> {data.postCaption}</p>
    		</div> 
    	</div> 
} 

export default Post;

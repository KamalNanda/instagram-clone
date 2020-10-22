import React , {Component} from 'react';
import LikeHolder from '../likeHolder/likeHolder'
import User from '../user/user'
import Comment from '../comments/comment/comment'
import './stylesheet.css'
class Post extends Component{
  render(){
    const data = this.props.data
    console.log(data)
    return (
    	<div className="post-container">
    		<User name = {data.userName} imgLink= {data.userImg}/>
    		<img src={data.postImg} alt={`${data.name} post`} className="post-img"/>
    		<LikeHolder id={data.id}  loadPosts={this.props.loadPosts}/>
    		<div className="caption-holder">
    			<p><strong>{data.userName}</strong> {data.postCaption}</p>
    		</div>
    		{/*<Comment data = {data.comments} id={data.id}/>*/}
    	</div>
    );
  }
}

export default Post;

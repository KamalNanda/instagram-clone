import React , {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import DeletePost from '../deletePost/deletePost'
import './stylesheet.css'
class LikeHolder extends Component{
  handleLikeClick = (id) => {
    document.getElementById(id).classList.toggle("active")
  }

  render(){
    const {id} = this.props
    return (
      <div className="icon-holder">
      	<div className="icons-left">
	      	<FontAwesome className="fa-heart" name="like" id={id} onClick={() => this.handleLikeClick(id)} size="2x" />
	        <FontAwesome className="fa-comment" name="comment" size="2x" />
	        <FontAwesome className="fa-paper-plane" name="forward" size="2x" />
        </div>
        <DeletePost id={id} loadPosts={this.props.loadPosts} />
      </div>
    );
  }
}

export default LikeHolder;
 
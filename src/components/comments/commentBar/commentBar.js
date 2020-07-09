import React , {Component} from 'react';
import './stylesheet.css'
class commentBar extends Component{
  render(){
  	const {id} = this.props
    return (
      <form onSubmit={this.props.handleSubmit} >
      	<input className="comment-input" onChange = {this.props.handleChange} id={`comment_${id}`} type="text" placeholder = "Add a comment..."/>
      </form>
    );
  }
}

export default commentBar;

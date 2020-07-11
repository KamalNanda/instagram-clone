import React , {Component} from 'react';
import CommentBar from '../commentBar/commentBar'
class Comment extends Component{
  constructor(props){
  		super(props)
  		this.state = {
  			comments : [],
  			id : null,
  			comment: ""
  		}
  	}
  componentDidMount(){
    var commentString
    if(this.props.data) commentString = this.props.data.split(",")
    else commentString = []
  		this.setState({
  			comments : commentString, 
  			id : this.props.id
  		})
  }
  handleSubmit = (event) => {
  	event.preventDefault()
    this.setState(state =>({
      comments : state.comments.concat([state.comment])
    }))
  	document.getElementById(`comment_${this.state.id}`).value = ""
  }
  handleChange = (event) => {
  	this.setState({
  		comment : event.target.value
  	})
  }
  render(){
    return (
      <div>
      	{
	      	this.state.comments.map((comment , i) => {
	      		return <p key={i} style={{padding : "5px 10px"}}><strong>User -</strong> {comment}</p>
	      	})
      	} 
      	<CommentBar id={this.state.id} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default Comment;

import React , {Component} from 'react';
import CommentBar from '../commentBar/commentBar'
import axios from 'axios'
 var commentString
class Comment extends Component{
  constructor(props){
  		super(props)
  		this.state = {
  			comments : [],
  			id : null,
  			comment: ""
  		}
      this.handleSubmit = this.handleSubmit.bind(this)
  	}
  async componentDidMount(){
   
   /* await axios.get(`https://api.sheety.co/999fbcac66ed8face0ff1fdf904048ba/instagramCloneBackend/comments/${this.props.id}`)
    .then(response => {
      if (response.data.comment.comment) commentString = response.data.comment.comment.split(",")
        else commentString = []
    })
  		this.setState({
  			comments : commentString, 
  			id : this.props.id
  		})*/
  }
  async handleSubmit(event) {
  	event.preventDefault()
    var comment = this.state.comments.concat([this.state.comment]).join(",")
    var commentdata = {
      comment : {
        "id" : this.state.id ,
        "postId" :this.state.id ,
        "comment" : comment
      }
    }
    JSON.stringify(commentdata)
    console.log(JSON.stringify(commentdata))
     /* await fetch(`https://v2-api.sheety.co/64d720c036ff9d3e73304b37a08af355/instagramCloneKamalnanda/comments/${this.state.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(commentdata)
     }).then( (response) => {
        return response.json()
      }).then( (json) => {
        console.log(json);
      });
    this.setState(state =>({
      comments : state.comments.concat([state.comment])
    }))*/
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

import React , {Component} from 'react';
import Post from './components/post/post'
import './App.css';
import CreatePost from './components/createPost/createPost'
import 'bulma/css/bulma.css'
import axios from 'axios'

class App extends Component{
  constructor(props){
  	super(props)
  	this.state = {
  		posts : [], 
      newPostImg : "",
      newPostCaption : ""
  	}
    this.body = React.createRef()
    this.onNewPostSubmit =this.onNewPostSubmit.bind(this)
    this.loadPosts = this.loadPosts.bind(this)
  }
  componentDidMount(){
    this.loadPosts()
  }
  async loadPosts(){
    await axios.get("https://v2-api.sheety.co/64d720c036ff9d3e73304b37a08af355/instagramCloneKamalnanda/sheets").then(response => {

      console.log(response)
      this.setState({
        posts : response.data.sheets
      })
    })
  }
  onNewPostInputChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value 
    })
  }
  async onNewPostSubmit(event) {
    event.preventDefault()
    var data = {
      "sheet" : {
        "id" : Number(new Date()),
        "userName" : "User",
        "userImg" : "https://ik.imagekit.io/hbj42mvqwv/witcher_4xtax1fWWj.jpg",
        "postImg" : this.state.newPostImg,
        "postCaption" : this.state.newPostCaption,
        "comments" : ""
      }
    }
    JSON.stringify(data)
    await fetch("https://v2-api.sheety.co/64d720c036ff9d3e73304b37a08af355/instagramCloneKamalnanda/sheets", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
     }).then( (response) => {
        return response.json()
      }).then( (json) => {
        console.log(json);
      });
    this.loadPosts()
    console.log(this.state.posts)
  }
  componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }
  render(){
    return (
     <div className="app" ref={this.body}>
     	 <CreatePost onInputChange = {this.onNewPostInputChange} onFormSubmit={this.onNewPostSubmit}/>
      
     	 {
     	 	this.state.posts.sort((x,y)=> {return y.id - x.id}).map((post , index) => {
 	      	 	return (
 	      	 		<Post data={post} key={index} />
 	      	 	)
 	      	 })
     	 }

     </div>
    );
  }
}

export default App;

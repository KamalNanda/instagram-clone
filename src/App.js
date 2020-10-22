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
      newPostCaption : "",
      myfile: ""
  	}
    this.body = React.createRef()
    this.onNewPostSubmit =this.onNewPostSubmit.bind(this)
    this.loadPosts = this.loadPosts.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
  }
  componentDidMount(){
    this.loadPosts()
  }
  async loadPosts(){
    await axios.get("https://api.sheety.co/999fbcac66ed8face0ff1fdf904048ba/instagramCloneBackend/sheets").then(response => {

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
  onFileChange = (e) => {
       var reader = new FileReader();
      var formData = new FormData()
      reader.onload = function (e) {
          console.log(e.target.result)
          
      formData.append("picture" , e.target.result)
      };
      reader.readAsDataURL(e.target.files[0]);
      console.log(reader)
        console.log()
     
  }
  async onNewPostSubmit(event) {
    event.preventDefault()
    var data = {
      "sheet" : {
        "id" : Number(new Date()),
        "userName" : "Kamal Nanda",
        "userImg" : "https://ik.imagekit.io/hbj42mvqwv/95136161_2314381235529760_7156256645826215936_n_gNRPFl-ED.jpg",
        "postImg" : this.state.newPostImg,
        "postCaption" : this.state.newPostCaption,
        "comments" : "",
        "img": this.state.myFile
      }
    }
    var commentData = {
      comment : {
        "id" : data.sheet.id,
        "postId" : data.sheet.id,
        "comment" : ""
      }
    }
    JSON.stringify(data)
    await fetch("https://api.sheety.co/999fbcac66ed8face0ff1fdf904048ba/instagramCloneBackend/sheets", {
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
      /*await fetch("https://api.sheety.co/999fbcac66ed8face0ff1fdf904048ba/instagramCloneBackend/comments", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(commentData)
     }).then( (response) => {
        return response.json()
      }).then( (json) => {
        console.log(json);
      });*/
    this.loadPosts()
  }
  render(){
    return (
     <div className="app" ref={this.body}>
     	 <CreatePost onInputChange = {this.onNewPostInputChange} onFormSubmit={this.onNewPostSubmit} onFileChange = {this.onFileChange}/>
      
     	 {
     	 	this.state.posts.sort((x,y)=> {return y.id - x.id}).map((post , index) => {
 	      	 	return (
 	      	 		<Post data={post} key={index} loadPosts={this.loadPosts} />
 	      	 	)
 	      	 })
     	 }

     </div>
    );
  }
}

export default App;

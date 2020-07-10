import React , {Component} from 'react';
import Post from './components/post/post'
import './App.css';
import data from './data.json'
import CreatePost from './components/createPost/createPost'
import 'bulma/css/bulma.css'
class App extends Component{
  constructor(props){
  	super(props)
  	this.state = {
  		posts : [], 
      newPostImg : "",
      newPostCaption : ""
  	}
    this.body = React.createRef()
  }
  componentDidMount(){
  	this.setState({
  		posts : data
  	})
  }
  onNewPostInputChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value 
    })
  }
  onNewPostSubmit= (event) => {
    event.preventDefault()
    var newPost = {
      "id" : Number(new Date()),
      "userName" : "Kamal Nanda",
      "userImg" : "https://ik.imagekit.io/hbj42mvqwv/95136161_2314381235529760_7156256645826215936_n_gNRPFl-ED.jpg",
      "postImg" : this.state.newPostImg,
      "postCaption" : this.state.newPostCaption,
      "comments" : [""],
      "likes" : 0
    }
    this.setState(state => ({
            posts: state.posts.concat([newPost])
        }))
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

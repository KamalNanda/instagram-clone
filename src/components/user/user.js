import React , {Component} from 'react';
import './stylesheet.css'
class User extends Component{
  render(){
  	const {name , imgLink} = this.props
    return (
      <div className="user-holder">
      	<img src={imgLink} alt={`${name} profile`} className ="user-img" />
      	<h1>{name}</h1>
      </div>
    );
  }
}

export default User;

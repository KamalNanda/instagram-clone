import React , { Component } from 'react'
import ContactBody from './ContactBody/ContactBody'
import Data from './data'
import './styles.css'
class Contact extends Component{
	render(){
		function onClickButton (){
			var contactBody = document.getElementById('contactBody')
			contactBody.style.animation = "moveOut 1.5s";
			contactBody.style.display= "block"
		}
		function onClickClose(){
			var contactBody = document.getElementById('contactBody')
			contactBody.style.animation="moveIn 1s"
			setTimeout(()=>{
				contactBody.style.display = "none"
			} , 1000)
		}
		return(
			<div id="contact">
				<ContactBody data = {Data} onCloseClick = {onClickClose}/>
				<button onClick = {onClickButton} className="contact-btn">CONTACT ME</button>
			</div>
		)
	}
}
export default Contact
import React , {Component} from 'react'
import './deletePost.css'
import FontAwesome from 'react-fontawesome';
import axios from 'axios'
class DeletePost extends Component{
	constructor(props){
		super(props)
		this.modal = React.createRef()
		this.onClickEvent = this.onClickEvent.bind(this)
		this.onModalClose = this.onModalClose.bind(this)
		this.onYesClick= this.onYesClick.bind(this)
	} 
	onClickEvent(){
		this.modal.current.classList.add('is-active')
		document.querySelector('html').classList.add('is-clipped')
		document.querySelector('.post-container').style.opacity = "0.3"
	}
	onModalClose(){
		this.modal.current.classList.remove('is-active')
		document.querySelector('.post-container').style.opacity = "1"
		document.querySelector('html').classList.remove('is-clipped')
	}
	async onYesClick() {
		console.log(this.props.id)
		// let url = `https://api.sheety.co/999fbcac66ed8face0ff1fdf904048ba/instagramCloneBackend/sheets/${this.props.id}`;
		// fetch(url, {
		// method: 'DELETE',
		// })
		// .then((response) => response.json())
		// .then(() => {
		// console.log('Object deleted');
		// });

		await axios.delete(`https://api.sheety.co/999fbcac66ed8face0ff1fdf904048ba/instagramCloneBackend/sheets/${this.props.id}`).then(response => console.log(response))
		this.onModalClose()
		this.props.loadPosts()
	}
	render(){
		return(
			<div>
				<FontAwesome onClick={this.onClickEvent} className="fa-trash" name="trash" color="white" size="2x" />
				<div className="modal" ref={this.modal}>
				<hr className="hr"/>
					<h1 style={{color: "black"}}>Are you sure, you want to delete the post?</h1>
					<div className="button-flex">
						<button id="yes-btn" onClick={this.onYesClick}>YES</button>
						<button id="no-btn" onClick={() => this.onModalClose()}>NO</button>
					</div>
					<button className="modal-close is-large" onClick={this.onModalClose} aria-label="close"></button>
				</div>
			</div>
		)
	}
}
export default DeletePost
import React, {Component} from 'react'
import './stylesheet.css'
class createPost extends Component{
	constructor(props){
		super(props)
		this.modal = React.createRef()
		this.onClickEvent = this.onClickEvent.bind(this)
		this.onModalClose = this.onModalClose.bind(this)
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
	render(){
		return(
			<div>
				<button className="create-btn" onClick={this.onClickEvent}>CREATE POST</button>
				<div className="modal" ref={this.modal}>
				<hr className="hr"/>
					<form onSubmit={this.props.onFormSubmit}>
						<div className="field">
						  <label className="label">Image Link</label>
						  <div className="control">
						    <input className="input is-primary" name="newPostImg" onChange={this.props.onInputChange} required type="text" placeholder="Text input" />
						  </div>
						</div>
						<div className="field">
						  <label className="label">Caption</label>
						  <div className="control">
						    <input className="input is-primary" name="newPostCaption" onChange={this.props.onInputChange } type="text" placeholder="Text input" />
						  </div>
						</div>
						<input type="submit" className="submit-btn" />
					</form>
					<button className="modal-close is-large" onClick={this.onModalClose} aria-label="close"></button>
				</div>
			</div>
		)
	}
}
export default createPost
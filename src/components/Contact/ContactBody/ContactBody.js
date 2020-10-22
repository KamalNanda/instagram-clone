import React , { Component } from 'react'
class ContactBody extends Component{

	onIconClick = (ob) =>{
		window.open(ob.link , '_blank')
	}
	render(){
		const data= this.props.data
		return(
			<div id="contactBody">
				<header>
					<div className="contact-header">
						<h1>Designed & Developed By Kamal</h1>
					</div>
					<img src="https://ik.imagekit.io/hbj42mvqwv/close_jpFLuKZyl.png" onClick={this.props.onCloseClick} alt="close" className="close"/>
				</header>
				<h1 align="center" className="cbH">GET IN TOUCH ON</h1>
				<div className="icon-holder">
					{
						data.map((data , index) =>{
							return <img src={data.imgLink} key={index} id={data.id} onClick={() => this.onIconClick(data)} href={data.link} className="icon" alt={data.id} />
						})
					}
				</div>
			</div>
		)
	}
}
export default ContactBody
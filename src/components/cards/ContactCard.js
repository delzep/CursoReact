import React from "react";
import "./index.css";

class ContactCard extends React.Component {
    render() {
        return (
            <div className="contact-card">
                <img src={this.props.contact.imgUrl} alt={this.props.contact.name} />
                <h3>{this.props.contact.id} - {this.props.contact.name}</h3>
                <p>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
            </div>
        );    
    };
}

export default ContactCard;
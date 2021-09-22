import React from "react";
import "./index.css";

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt={props.contact.name} />
            <h3>{props.index + 1} - {props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    );
}
export default ContactCard;
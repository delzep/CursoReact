import React from "react";
import ContactCard from "./cards/ContactCard";
import Contacts from "../data/contacts.json"

class MainContent extends React.Component {
    getData() {
        // map data for contactList
        const contactList = Contacts.map(contact => <ContactCard key={contact.id} contact={contact} />);
        return contactList;
    };
    // return content
    render() {
        return (
            <main>
                {this.getData()}
            </main>
        )
    };
}

export default MainContent;
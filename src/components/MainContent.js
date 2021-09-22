import React from "react";
import ContactCard from "./cards/ContactCard";
import Contacts from "../data/contacts.json"

function MainContent() {
    // map data for contactList
    const contactList = Contacts.map(contact => <ContactCard key={contact.id} contact={contact} />);
    // return content
    return (
        <main>
            {contactList}
        </main>
    );
}

export default MainContent;
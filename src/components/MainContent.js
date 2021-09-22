import React from "react";
import ContactCard from "./cards/ContactCard";

function MainContent() {
    // sample data
    const contacts = [
        {
            name: 'Mr. first', 
            imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tOY8AMzEt0iNMNATuYh2agAAAA%26pid%3DApi&f=1',
            phone: '+57 325 654321',
            email: 'first@site.com'
        }, 
        {
            name: 'Mr. second', 
            imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UxRMdncPXSsWj3WZlutmmwAAAA%26pid%3DApi&f=1',
            phone: '+57 300 321987',
            email: 'second@site.com'
        }
    ];
    // map data for contactList
    const contactList = contacts.map((contact, i) => {
                    return (<ContactCard key={i} contact={contact} index={i} />);
                });
    // return content
    return (
        <main>{contactList}</main>
    );
}

export default MainContent;
import React from "react";

import logo from '../logo.svg';

class Header extends React.Component {
    setGreetings() {
        // test messages:
        // const date = new Date(2021,9,20,15);
        
        // set greetings
        const date = new Date();
        const hours = date.getHours();
        const styles = { backgroundColor: '#ff0' };
        let timeOfDay;
        if (hours < 12) {
            timeOfDay = 'morning';
            styles.backgroundColor = '#ff0';
        } else if (hours >=12 && hours < 17) {
            timeOfDay = 'afternoon';
            styles.backgroundColor = '#f60';
        } else {
            timeOfDay = 'night';
            styles.backgroundColor = '#282c34';
            styles.border = 'none';
            styles.boxShadow = '-15px 0 0 0 #06a2ff';
            styles.marginLeft = '20px';
        }
        return {timeOfDay, styles};
    };

    render() {
        return (
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <h1>
                    Hello, good { this.setGreetings().timeOfDay } <span className="sun" style={ this.setGreetings().styles }></span>
                </h1>
                <p>
                    Welcome to my first Reactjs project ;)
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                    Learn React
                </a>
            </header>
        );
    };
}


export default Header;
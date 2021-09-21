import React from "react"

import logo from '../logo.svg';

function Header() {
    // set greetings
    const date = new Date();
    // test messages:
    // const date = new Date(2021,9,20,10);
    const hours = date.getHours();
    let timeOfDay = hours < 12 ? 'morning' : (hours >=12 && hours < 17 ? 'afternoon' : 'night');
    // set sun color
    const styles = { backgroundColor: '#ff0' };
    styles.backgroundColor = hours < 12 ? '#ff0' : (hours >=12 && hours < 17 ? '#f60' : '#33f');

    return (
        <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1>
                Hello good { timeOfDay } <span className="sun" style={ styles }></span>
            </h1>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                Learn React
            </a>
        </header>
    )
}

export default Header
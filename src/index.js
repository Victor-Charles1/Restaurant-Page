import loadHome from './home.js';
import './styles.css';
import loadMenu from './menu.js';
import loadContact from './contact.js';


// Load home page by default
loadHome();

// Tab switching
document.getElementById('home-tab').addEventListener('click', loadHome);
document.getElementById('menu-tab').addEventListener('click', loadMenu);
document.getElementById('contact-tab').addEventListener('click', loadContact);

console.log("This is a test message")
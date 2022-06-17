import header from './assets/modules/header';
import home from './assets/modules/home';
import './style.css';

const content = document.querySelector('#content');

content.appendChild(header());
content.appendChild(home());


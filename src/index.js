import initPage from './assets/modules/initPage';
import home from './assets/modules/home';
import contact from './assets/modules/contact';
import header from './assets/modules/header';
import menu from './assets/modules/menu';
import './style.css';

const page = (() => {
    const content = document.querySelector('#content');
    
    const init = () => {
        content.textContent = '';
        content.appendChild(header());
        listeners.init();
    }
    const loadHome = () => {
        init();
        content.appendChild(home());
    }
    const loadMenu = () => {
        init();
        content.appendChild(menu());
    }
    const loadContact = () => {
        init();
        content.appendChild(contact());
    }

    return {loadHome, loadMenu, loadContact};
})();

const listeners = (() => {
    const init = () => {
        const home = document.querySelector('#home-btn');
        home.addEventListener('click', page.loadHome);

        const menu = document.querySelector('#menu-btn');
        menu.addEventListener('click', page.loadMenu);

        const contact = document.querySelector('#contact-btn');
        contact.addEventListener('click', page.loadContact);
    }

    return {init};
})();

initPage();
listeners.init();



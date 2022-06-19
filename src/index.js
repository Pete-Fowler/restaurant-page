import initPage from './assets/modules/initPage';
import home from './assets/modules/home';
import contact from './assets/modules/contact';
import header from './assets/modules/header';
import menu from './assets/modules/menu';
import './style.css';

initPage();

const page = ((e) => {
    const load = () => {
        const content = document.querySelector('#content');
        content.textContent = '';


    }
    return {load};
})();

const listeners = ((e) => {
    const home = document.querySelector('#home-btn');
    home.addEventListener('click', initPage);

    

})();





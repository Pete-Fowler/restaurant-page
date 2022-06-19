import header from './header';
import home from './home';


export default function initPage() {

const content = document.querySelector('#content');
content.textContent = '';

content.appendChild(header());
content.appendChild(home());

}

import header from './header';
import home from './home';


export default function loadPage() {

const content = document.querySelector('#content');

content.appendChild(header());
content.appendChild(home());

}

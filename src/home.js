// import bowl from './assets/phoBowl.jpg';
import './style.css';

export default function home() {
    const element = document.createElement('div');
    element.id = 'home';
    
    const h1 = document.createElement('h1');
    h1.textContent = `Is This Pho Real?`;
    element.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = 'Best Vietnamese food ever!';
    element.appendChild(h2);

    // const phoBowl = document.createElement('img');
    // phoBowl.id = 'bowl';
    // phoBowl.src = bowl;
    // element.appendChild(phoBowl);

    return element;
}
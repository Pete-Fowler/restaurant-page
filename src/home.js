import bowl from './phoBowl.jpg';

export default function home() {
    const element = document.createElement('div');
    
    const h1 = document.createElement('h1');
    h1.textContent = `Pho Real`;
    element.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = 'Best Vietnamese food ever!';
    element.appendChild(h2);

    const phoBowl = document.createElement('img');
    phoBowl.src = bowl;
    phoBowl.setAttribute('style', 'width: 400px');
    element.appendChild(phoBowl);

    return element;
}
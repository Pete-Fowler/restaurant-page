
export default function home() {
    const element = document.createElement('div');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Pho Real -- Best Vietnamese food _ever_';
    element.appendChild(headline);

    return element;
}
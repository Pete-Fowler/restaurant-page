import menu1 from '../images/menu.jpg';

export default function menu() {

    const el = document.createElement('div');
    el.id = 'menu';

    const img = new Image();
    img.src = menu1;
    img.id = 'menu-img';
    el.appendChild(img);

    const credits = document.createElement('a');
    credits.id = 'credits';
    credits.textContent = 'Image: Culinary vector created by www.freepik.com';
    credits.setAttribute('href', 'https://www.freepik.com/vectors/culinary');
    credits.setAttribute('title', 'Culinary vector created by www.freepik.com');
    el.appendChild(credits);

    return el;
}
export default function header() {

const el = document.createElement('div');
el.id = 'header';

const h1 = document.createElement('h1');
h1.textContent = `Is This Pho Real?`;
el.appendChild(h1);



return el;

}
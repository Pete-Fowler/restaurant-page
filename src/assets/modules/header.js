export default function header() {

const el = document.createElement('div');
el.id = 'header';

const h1 = document.createElement('h1');
h1.textContent = `Is This Pho Real?`;
el.appendChild(h1);

const homeBtn = document.createElement('button');
homeBtn.setAttribute('style', 'id="home" class=".btn"'); // fix id and class
homeBtn.classList.add('btn');
homeBtn.id = 'home-btn';
homeBtn.textContent = 'Home';
el.appendChild(homeBtn);

return el;

}
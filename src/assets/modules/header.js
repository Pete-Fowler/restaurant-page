export default function header() {

const el = document.createElement('div');
el.id = 'header';

const h1 = document.createElement('h1');
h1.textContent = `Is This Pho Real?`;
el.appendChild(h1);

const btns = document.createElement('div');
btns.id = 'btn-group';

const homeBtn = document.createElement('button');
homeBtn.classList.add('btn');
homeBtn.id = 'home-btn';
homeBtn.textContent = 'Home';
btns.appendChild(homeBtn);

el.appendChild(btns);

return el;
}
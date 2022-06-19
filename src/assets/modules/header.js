export default function header() {

const el = document.createElement('div');
el.id = 'header';

const h1 = document.createElement('h1');
h1.textContent = `Is This Phở Real?`;
el.appendChild(h1);

const btns = document.createElement('div');
btns.id = 'btn-group';

btns.appendChild(makeBtn('Home'));
btns.appendChild(makeBtn('Menu'));
btns.appendChild(makeBtn('Contact'));

function makeBtn(name) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.id = `${name.toLowerCase()}-btn`;
    btn.textContent = `${name}`;
    return btn;
}

el.appendChild(btns);

return el;
}
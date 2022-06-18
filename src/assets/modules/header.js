export default function header() {

const el = document.createElement('div');
el.id = 'header';

const h1 = document.createElement('h1');
h1.textContent = `Is This Pho Real?`;
el.appendChild(h1);

const btns = document.createElement('div');
btns.id = 'btn-group';

// const homeBtn = document.createElement('button');
// homeBtn.classList.add('btn');
// homeBtn.id = 'home-btn';
// homeBtn.textContent = 'Home';
// btns.appendChild(homeBtn);

// const menuBtn = document.createElement('button');
// menuBtn.classList.add('btn');
// menuBtn.id = 'menu-btn';
// menuBtn.textContent = 'Menu';
// btns.appendChild(menuBtn);

// const contactBtn = document.createElement('button');
// contactBtn.classList.add('btn');
// contactBtn.id = 'contact-btn';
// contactBtn.textContent = 'Contact';
// btns.appendChild(contactBtn);

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
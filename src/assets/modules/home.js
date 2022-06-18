
import bowl1 from '../images/phoBowl.jpg';

export default function home() {
    const el = document.createElement('div');
    el.id = 'home';

    const bowl = new Image();
    bowl.src = bowl1;
    bowl.id = 'bowl';
    bowl.classList.add('photo');
    el.appendChild(bowl);

    return el;
}
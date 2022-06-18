
import bowl1 from '../images/phoBowl.jpg';

export default function home() {
    
    const el = document.createElement('div');
    el.id = 'home';

    const bowl = new Image();
    bowl.src = bowl1;
    bowl.id = 'bowl';
    bowl.classList.add('photo');
    el.appendChild(bowl);

    const aboutBox = document.createElement('div');
    aboutBox.id = 'about-box';
    const about = document.createElement('div');
    about.id = 'about';
    
    about.textContent = '"Is This Pho Real?" Is what our customers find \
    themselves asking after each visit. With owners from Saigon, southern style \
    pho with fresh local ingredients, emphasizing lime and Thai basil are what \
    we are all about. Our restaurant is 100% vegan.'
    
    aboutBox.appendChild(about);
    el.appendChild(aboutBox);


    return el;
}
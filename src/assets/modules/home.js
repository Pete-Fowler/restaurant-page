
import bowl1 from '../images/phoBowl.jpg';
import apps1 from '../images/apps.jpg';
import greenApp1 from '../images/greenApp.jpg';

export default function home() {
    
    const el = document.createElement('div');
    el.id = 'home';

    // Bowl hero image
    const bowl = new Image();
    bowl.src = bowl1;
    bowl.id = 'bowl';
    bowl.setAttribute('alt', 'Picture of bowl of pho');
    el.appendChild(bowl);

    // About paragraph
    const aboutBox = document.createElement('div');
    aboutBox.id = 'about-box';
    const about = document.createElement('div');
    about.id = 'about';
    
    about.textContent = '"Is This Pho Real?" Is what our customers find \
    themselves asking after each visit. Southern style pho with fresh local \
    ingredients, emphasizing lime and Thai basil are what we are all about. \
    Our restaurant is 100% vegan.'
    
    aboutBox.appendChild(about);
    el.appendChild(aboutBox);

    // Box for more images of food
    const menuBox = document.createElement('div');
    menuBox.id = 'menu-box';

        const box1 = document.createElement('div');
        box1.classList.add('box');
            
            const apps = new Image();
            apps.src = apps1;
            apps.id = 'apps';
            apps.setAttribute('alt', 'Picture of appetizer');
            apps.classList.add('photo');
            
            box1.appendChild(apps);
            menuBox.appendChild(box1);

        const box2 = document.createElement('div');
        box2.classList.add('box');
            
            const greenApp = new Image();
            greenApp.src = greenApp1;
            greenApp.id = 'green-app';
            greenApp.setAttribute('alt', 'Picture of appetizer');
            greenApp.classList.add('photo');
            
            box2.appendChild(greenApp);
            menuBox.appendChild(box2);

    el.appendChild(menuBox);

    return el;
}
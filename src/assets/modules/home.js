import bowl1 from '../images/phoBowl.jpg';
import apps1 from '../images/apps.jpg';
import greenApp1 from '../images/greenApp.jpg';
import bahnMi1 from '../images/bahnMi.jpg';
import pho31 from '../images/pho3.jpg';
import interior1 from '../images/interior.jpg';

export default function home() {
    const el = document.createElement('div');
    el.id = 'home';

    // Bowl hero image
    const bowl = new Image();
    bowl.src = bowl1;
    bowl.id = 'bowl';
    bowl.setAttribute('alt', 'Picture of bowl of Phở');
    el.appendChild(bowl);

    // About paragraph
    const aboutBox = document.createElement('div');
    aboutBox.id = 'about-box';
    const about = document.createElement('div');
    about.id = 'about';

    about.textContent = 'Customers ask "Is This Phở Real?" after each visit. \
    Southern style phở with fresh local ingredients, emphasizing lime and Thai \
    basil are what we are all about. Our restaurant is 100% vegan, as owners \
    Phan Văn Trường and Nguyễn Thị Minh were shipwrecked off the coast of \
    Vietnam, and rode an exceptionally helpful whale several thousand miles on \
    an aquatic odyssey to Los Angeles.'

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

        const box3 = document.createElement('div');
        box3.classList.add('box');
            
            const bahnMi = new Image();
            bahnMi.src = bahnMi1;
            bahnMi.id = 'bahn-mi';
            bahnMi.setAttribute('alt', 'Picture of bahn-mi sandwich');
            bahnMi.classList.add('photo');
            
            box3.appendChild(bahnMi);
            menuBox.appendChild(box3);

        const box4 = document.createElement('div');
        box4.classList.add('box');
            
            const pho3 = new Image();
            pho3.src = pho31;
            pho3.id = 'pho3';
            pho3.setAttribute('alt', 'Picture of pho soup');
            pho3.classList.add('photo');
            
            box4.appendChild(pho3);
            menuBox.appendChild(box4);

    el.appendChild(menuBox);

    // Location paragraph
    const locationBox = document.createElement('div');
    locationBox.id = 'location-box';
    const location = document.createElement('div');
    location.id = 'location';

    location.textContent = 'Located in the Highlands neighborhood near \
    downtown Denver, our modern, minimalistic space is unpretentious and \
    welcoming to all.'

    locationBox.appendChild(location);
    el.appendChild(locationBox);

    // Interior image
    const interior = new Image();
    interior.src = interior1;
    interior.id = 'interior';
    interior.setAttribute('alt', 'Picture of restaurant interior');
    el.appendChild(interior);

    // Photo credits
    const credits = document.createElement('div');
    credits.id= 'credits';
    credits.textContent = 'Images from pexels.com by photographers: \
    Flo Dahm Dương Nhân, Jer Chung, and Asad'
    el.appendChild(credits);

    return el;
}
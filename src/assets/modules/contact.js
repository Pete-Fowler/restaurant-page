import exterior1 from '../images/exterior.jpg';

export default function contact() {
    
    // Main div element to be added to DOM
    const el = document.createElement('div');
    el.id = 'contact';

    // Exterior image
    const exterior = new Image();
    exterior.src = exterior1;
    exterior.id = 'exterior'
    el.appendChild(exterior);

    // Box with hours / address / phone / email
    const contactBox = document.createElement('div');
    contactBox.id = 'contact-box';

    const hours = document.createElement('div');
    hours.id = 'hours';
    hours.textContent = 'Open: Tuesday - Sunday 11AM - 10PM';
    contactBox.appendChild(hours);

    const phone = document.createElement('div');
    phone.id = 'phone';
    phone.textContent = 'Phone: 303-123-4567'
    contactBox.appendChild(phone);

    const email = document.createElement('div');
    email.id = 'email';
    email.textContent = 'Email: email@emailaddress.com';
    contactBox.appendChild(email);

    const address = document.createElement('div');
    address.id = 'contact';
    address.textContent = 'Address: 1234 S. Real St., Denver, CO'
    contactBox.appendChild(address);

    el.appendChild(contactBox);

    // Photo credit
    const credits = document.createElement('a');
    credits.id = 'credits';
    credits.textContent = 'Image: www.pexels.com';
    credits.setAttribute('href', 'https://www.pexels.com/photo/young-female-employee-in-uniform-placing-signboard-against-cafe-4349944/');
    credits.setAttribute('title', 'www.pexels.com young-female-employee-in-uniform-placing-signboard-against-cafe');
    el.appendChild(credits);
    
    return el;
}
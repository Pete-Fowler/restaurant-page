import exterior1 from '../images/exterior.jpg';

export default function contact() {
    
    const el = document.createElement('div');
    el.id = 'contact';

    // Exterior image
    const exterior = new Image();
    exterior.src = exterior1;
    exterior.id = 'exterior'
    el.appendChild(exterior);


    // Hours / address / phone / email
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
    
    return el;
}
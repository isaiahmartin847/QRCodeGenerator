const script = document.createElement('script');

// Set the source URL to load the QRCode.js library
script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';

// Define a function to execute when the script is loaded
script.onload = () => {
    // Now you can use the QRCode.js library
    console.log('QRCode.js has been loaded.');
};
let qrcode = new QRCode("qrcode");


document.body.appendChild(script);

const fs = require('fs');
const path = require('path');

// Create the public/images folder
const imagesDir = path.join(__dirname, 'public', 'images');
fs.mkdirSync(imagesDir, { recursive: true });

// List of images to create
const images = [
'profile.jpg',
'chat-app.jpg',
'netflix-clone.jpg',
'expense-tracker.jpg',
];

// Create placeholder images
images.forEach((image) => {
const filePath = path.join(imagesDir, image);
  fs.writeFileSync(filePath, ''); // Creates an empty file
console.log(`Created: ${filePath}`);
});

console.log('All images added successfully!');
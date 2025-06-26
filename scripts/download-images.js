const fs = require('fs');
const https = require('https');
const path = require('path');

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '../src/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Image URLs (using placeholder images from unsplash)
const images = [
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    filename: 'ats-project.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    filename: 'bookcraft-project.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    filename: 'calculator-project.jpg'
  }
];

// Function to download an image
function downloadImage(url, filename) {
  const filepath = path.join(assetsDir, filename);
  const file = fs.createWriteStream(filepath);
  
  https.get(url, (response) => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });  
  }).on('error', (err) => {
    fs.unlink(filepath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${filename}:`, err.message);
  });
}

// Download all images
images.forEach(img => {
  downloadImage(img.url, img.filename);
});

console.log('Downloading project images...');

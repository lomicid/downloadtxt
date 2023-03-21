const http = require('https');
const fs = require('fs');
const data = fs.readFileSync('file.txt').toString();

const fileUrl = 'https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt';
const filePath = './file.txt';


const file = fs.createWriteStream(filePath);

http.get(fileUrl, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close();
    console.log('Файл завантажено та збережено.');
  });
});

console.log(data.split('\n').length);

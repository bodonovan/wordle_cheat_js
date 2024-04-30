const fs = require('fs');

// Input and output file paths
const inputFile = 'words';
const outputFile = 'dict.js';

// Read input file line by line
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Split data into lines
  const lines = data.split('\n');

  // Write header line to output file
  const outputStream = fs.createWriteStream(outputFile);
  outputStream.write('const dict = [\n');

  // Write lines to output file
  lines.forEach(line => {
    if (5==line.length) {
      // if word length is 5 - copy to dictionary
      outputStream.write('\t\''+line + '\',\n');
    } else if (4==line.length) {
      // if word length is 4 - add s to end and then put in dictionary
      outputStream.write('\t\''+line + 's\',\n');
    }
  });
  // Write line closing dict to output file
  outputStream.write(']\n');

  // Close output stream
  outputStream.end();

  console.log('Lines copied successfully!');
});



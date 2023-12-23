const csv = require('csv-parser');
const https = require('https');
const results = [];

https.get('https://raw.githubusercontent.com/doridoridoriand/shokujinjp-data/master/fixed.csv', (response) => {
  response.pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
});
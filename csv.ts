const csv = require('csv-parser');
const https = require('https');

interface CsvData {
 [key: string]: string;
}

const results: CsvData[] = [];

https.get('https://raw.githubusercontent.com/doridoridoriand/shokujinjp-data/master/fixed.csv', (response) => {
  response.pipe(csv())
    .on('data', (data: CsvData) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
});


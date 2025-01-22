// const axios = require('axios');
// const cheerio = require('cheerio');

// // Function to fetch and parse the HTML content
// const fetchPHPFiles = async (url) => {
//   try {
//     // Fetch the HTML content
//     const { data } = await axios.get(url);
//     // Load HTML into Cheerio
//     const $ = cheerio.load(data);
//     const phpFiles = [];

//     // Select all anchor tags and filter for .php files
//     $('a').each((index, element) => {
//       const href = $(element).attr('href');
//       if (href && href.endsWith('.php')) {
//         phpFiles.push(href);
//       }
//     });

//     return phpFiles;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };

// // Example usage
// const domain = 'https://results.kongu.edu/';
// fetchPHPFiles(domain).then((phpFiles) => {
//   console.log('PHP Files:', phpFiles);
// });
const axios = require('axios');
const cheerio = require('cheerio');
const fs=require('fs')

// Function to fetch and parse the HTML content from Wayback Machine
const fetchArchivedFiles = async (domain, timestamp) => {
  const archiveUrl = `https://web.archive.org/web/${timestamp}/${domain}`;
  try {
    const { data } = await axios.get(archiveUrl);
    const $ = cheerio.load(data);
    const phpFiles = [];

    $('a').each((index, element) => {
      const href = $(element).attr('href');
      if (href && href.endsWith('.php')) {
        phpFiles.push(href);
      }
    });

    return phpFiles;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

// Example usage
const domain = 'https://results.kongu.edu/';
const timestamp = '20210101000000'; // YYYYMMDDHHMMSS format
fetchArchivedFiles(domain, timestamp).then((phpFiles) => {
  console.log('PHP Files from Archive:', phpFiles);
  fs.writeFileSync('sample.txt',phpFiles.join('\n'),'utf8');
});

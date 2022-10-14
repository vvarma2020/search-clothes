require('dotenv').config(); // get local .env variables into process.env
const axios = require('axios');
const express = require('express');
const app = express();
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// Custom logger middleware.
app.use(logger);

// Serve static files for root
app.use(express.static('./public'));

// console.log(process.env.SERPSTACK_ACCESS_KEY);
// const getLocation = async () => {

//     const params = {
//         access_key: process.env.SERPSTACK_ACCESS_KEY,
//         query: 'New Delhi',
//     }

//     await axios.get('http://api.serpstack.com/locations', { params })
//         .then(response => {
//             const apiResponse = response.data;

//             console.log(JSON.stringify(apiResponse));
//             // apiResponse.shopping_results.map((position, title, url) => {
//             //     console.log(`${position}: ${title} | ${url}`);
//             // })
//             // console.log("Total results: ", apiResponse.search_information.total_results);
//             // apiResponse.organic_results.map((result, number) =>
//             //     console.log(`${number + 1}. ${result.title}`));
//         }).catch(error => {
//             console.log(error);
//         });
// }

// const params = {
//     access_key: process.env.SERPSTACK_ACCESS_KEY,
//     query: 'h&m crop top', // this is where the query string will be set
//     // type: 'shopping', // specify type for search
//     gl: 'in'
// }

// axios.get('http://api.serpstack.com/search', { params })
//     .then(response => {
//         const apiResponse = response.data;

//         console.log(JSON.stringify(apiResponse));
//         // apiResponse.shopping_results.map((position, title, url) => {
//         //     console.log(`${position}: ${title} | ${url}`);
//         // })
//         // console.log("Total results: ", apiResponse.search_information.total_results);
//         // apiResponse.organic_results.map((result, number) =>
//         //     console.log(`${number + 1}. ${result.title}`));
//     }).catch(error => {
//         console.log(error);
//     });

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
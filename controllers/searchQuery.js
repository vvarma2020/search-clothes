const axios = require('axios');
/*
This code uses serpstack custom search API. For more information
refer their API documentation : https://serpstack.com/documentation#example_php
Configure the access key using a .env file.
*/

// const params = {
//     access_key: process.env.SERPSTACK_ACCESS_KEY,
//     query: 'h&m crop top',
//     gl: 'in'
// }

// axios.get('http://api.serpstack.com/search', { params })
//     .then(response => {
//         const apiResponse = response.data;
//         console.log("Total results: ", apiResponse.search_information.total_results);
//         apiResponse.organic_results.map((result, number) =>
//             console.log(`${number + 1}. ${result.title}`));
//     }).catch(error => {
//         console.log(error);
//     });

const searchQuery = async (req, res) => {
    if (!req?.body?.query) {
        return res.status(400).json({ 'message': 'query string required' })
    }

    try {
        const apiResponse = await axios.get('http://api.serpstack.com/search')
    } catch (err) {
        console.error(err);
    }
}
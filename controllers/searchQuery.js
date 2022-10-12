const axios = require('axios');

/*
This code uses serpstack custom search API. For more information
refer their API documentation : https://serpstack.com/documentation#example_php
Configure the access key using a .env file.
*/

const searchQuery = async (query) => {
    const params = {
        access_key: process.env.SERPSTACK_ACCESS_KEY,
        query: 'h&m crop top' // this is where the query string will be set
        // 'type': 'shopping' // specify type for search
    }

    axios.get('http://api.serpstack.com/search', { params })
        .then(response => {
            const apiResponse = response.data;
            console.log("Total results: ", apiResponse.search_information.total_results);
            apiResponse.organic_results.map((result, number) =>
                console.log(`${number + 1}. ${result.title}`));
        }).catch(error => {
            console.log(error);
        });
}

module.exports = searchQuery;